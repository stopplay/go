/**
 * @flow
 * @format
 */

import React, { useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles/CheckoutScreenStyle';
import i18n from '../i18n/i18n';
import Toast from 'react-native-root-toast';
// Contexts
import Context from '../utils/context/Context';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';
import Item from '../components/Item';
import RadioButton from '../components/RadioButton';

type Props = {
  navigation: any,
};

const CheckoutScreen = (props: Props) => {
  const { state, dispatch } = useContext(Context);
  const { currentOrder, currentMenu } = state;
  const tableCode = currentOrder.infos.table_code;
  const menuType = currentMenu.type_of_menu.toLowerCase();
  const [typeOfOrder, setTypeOfOrder] = useState('');

  const totalCheck = (): string => {
    const productsWithTotal = currentOrder.products.map(product => {
      let extraPrice = 0;
      if (product.extras) {
        extraPrice = product.extras.reduce(
          (result, item) => result + item.quantity * parseFloat(item.price),
          0,
        );
      }
      return {
        ...product,
        total: product.quantity * (product.price + extraPrice),
      };
    });
    const totalProducts = productsWithTotal.reduce(
      (result, item) => result + item.total,
      0,
    );
    return totalProducts.toFixed(2);
  };

  const handleSubmit = () => {
    if (menuType === 'mesa') {
      return props.navigation.navigate('DeliveryScreen');
    }
    if (typeOfOrder === '') {
      return Toast.show(i18n.t('checkout.errors.selectType'), {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
      });
    }
    if (menuType === 'clube') {
      dispatch({
        type: 'SET_ORDER_TYPE',
        payload: `${menuType} ${typeOfOrder.toLowerCase()}`,
      });
      if (typeOfOrder.toLowerCase() === 'collection') {
        return props.navigation.navigate('CollectOrderScreen');
      }
    } else {
      dispatch({
        type: 'SET_ORDER_TYPE',
        payload: typeOfOrder,
      });
    }
    return props.navigation.navigate('DeliveryScreen');
  };

  const _renderInfos = () => {
    if (menuType === 'mesa') {
      return (
        <View style={styles.tableInfoContainer}>
          <Text style={[styles.tableInfoText, styles.textColor]}>{`${i18n
            .t('checkout.total')
            .toUpperCase()}: R$ ${totalCheck()}`}</Text>
          <Text style={[styles.tableInfoText, styles.textColor]}>{`${i18n
            .t('checkout.tableCode')
            .toUpperCase()}: ${tableCode}`}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.tableInfoContainer}>
          <Text style={[styles.deliveryInfoText, styles.textColor]}>{`${i18n
            .t('checkout.total')
            .toUpperCase()}: R$ ${totalCheck()}`}</Text>
          <Text style={[styles.infoText, styles.textColor]}>
            {i18n.t('checkout.selectText')}
          </Text>
          <View style={styles.buttonsContainer}>
            <RadioButton
              value={i18n.t('checkout.buttons.delivery')}
              onPress={() => setTypeOfOrder('Delivery')}
              selected={typeOfOrder === 'Delivery'}
            />
            <RadioButton
              value={i18n.t('checkout.buttons.collection')}
              onPress={() => setTypeOfOrder('Collection')}
              selected={typeOfOrder === 'Collection'}
            />
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title={i18n.t('checkout.title')}
          icon="keyboard-backspace"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.body}>
        {_renderInfos()}
        <FlatList
          data={currentOrder.products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Item item={item} />}
          style={styles.flatListContainer}
        />
      </View>
      <View style={styles.footer}>
        <ButtonFullWidth
          value={i18n.t('checkout.buttons.confirm')}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default CheckoutScreen;
