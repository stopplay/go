/**
 * @flow
 * @format
 */

import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import i18n from '../i18n/i18n';
import styles from './styles/DetailsScreenStyle';
import { formatDateTime } from '../utils/helpers';
import { StackActions } from 'react-navigation';

// Context
import Context from '../utils/context/Context';
import LoadingContext from '../utils/context/LoadingContext';
// Services
import Orders from '../services/Orders';
// Types
import type { ConfirmedOrderType } from '../utils/context/Context';
// Components
import Header from '../components/Header';
import Item from '../components/Item';

type Props = {
  navigation: any,
};

const DetailsScreen = (props: Props) => {
  const order: ConfirmedOrderType = props.navigation.getParam('order');
  const { setLoading } = useContext(LoadingContext);
  const { dispatch } = useContext(Context);

  const typeOfOrder = {
    'O-M': 'details.typeOfOrder.table',
    'O-D': 'details.typeOfOrder.delivery',
    'O-C': 'details.typeOfOrder.collection',
    'BC-D': 'details.typeOfOrder.club.delivery',
    'BC-C': 'details.typeOfOrder..clubcollection',
  };

  const totalCheck = (): string => {
    const total = order.items.reduce(
      (result, item) => result + item.quantity * item.product.price,
      0,
    );
    return total.toFixed(2);
  };

  const _renderTableCode = () => {
    if (order.table_code && order.table_code !== '') {
      return (
        <View style={styles.row}>
          <Text
            style={[styles.tableInfoText, styles.textColor, styles.boldText]}>
            {i18n.t('details.tableCode').toUpperCase()}:
          </Text>
          <Text style={[styles.tableInfoText, styles.textColor]}>
            {` ${order.table_code ? order.table_code : ''}`}
          </Text>
        </View>
      );
    }
  };

  const cancelOrder = async () => {
    try {
      setLoading(true);
      const data = await Orders.cancelOrder(order.order_id);
      if (data) {
        dispatch({
          type: 'CANCEL_ORDER',
          payload: data,
        });
        props.navigation.dispatch(StackActions.popToTop());
        return setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      ToastAndroid.show(i18n.t(error.message), ToastAndroid.LONG);
    }
  };

  const _renderCancel = () => {
    if (order.status.toLowerCase() === 'a fazer') {
      return (
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.cancelButtonContainer}
            onPress={cancelOrder}>
            <Text
              style={[
                styles.tableInfoText,
                styles.cancelButtonText,
                styles.boldText,
              ]}>
              {i18n.t('details.cancel').toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title={i18n.t('details.title')}
          icon="arrow-left"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.tableInfoContainer}>
          <View style={styles.row}>
            <Text
              style={[styles.tableInfoText, styles.textColor, styles.boldText]}>
              {i18n.t('details.total').toUpperCase()}:
            </Text>
            <Text style={[styles.tableInfoText, styles.textColor]}>
              {` R$ ${totalCheck()}`}
            </Text>
          </View>
          {_renderTableCode()}
          <View style={styles.row}>
            <Text
              style={[styles.tableInfoText, styles.textColor, styles.boldText]}>
              {i18n.t('details.type').toUpperCase()}:
            </Text>
            <Text style={[styles.tableInfoText, styles.textColor]}>
              {` ${i18n.t(typeOfOrder[order.type_of_order.toUpperCase()])}`}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[styles.tableInfoText, styles.textColor, styles.boldText]}>
              {i18n.t('details.status').toUpperCase()}:
            </Text>
            <Text style={[styles.tableInfoText, styles.textColor]}>
              {` ${order.status}`}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[styles.tableInfoText, styles.textColor, styles.boldText]}>
              {i18n.t('details.date').toUpperCase()}:
            </Text>
            <Text style={[styles.tableInfoText, styles.textColor]}>
              {` ${formatDateTime(order.date_ordered)}`}
            </Text>
          </View>
          {_renderCancel()}
        </View>
        <FlatList
          data={order.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Item item={item} />}
          style={styles.flatListContainer}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
