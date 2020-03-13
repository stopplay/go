/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles/ProductStyle';
import { Colors } from '../theme';
import i18n from '../i18n/i18n';

type Props = {
  item: {
    name: string,
    price: number,
    image?: string,
    quantity: number,
    description: string,
    extras: Array<any>,
  },
  max: number,
  handleQuantity: Function,
  setProductToCustomize: Function,
};

const Product = (props: Props) => {
  const { item, max, handleQuantity, setProductToCustomize } = props;

  const onPressMinus = () => {
    if (item.quantity > 0) {
      handleQuantity('remove', {
        ...item,
        quantity: item.quantity - 1,
      });
    }
  };

  const onPressPlus = () => {
    if (item.quantity < max) {
      handleQuantity('add', {
        ...item,
        quantity: item.quantity + 1,
      });
    }
  };

  const _renderButtons = () => {
    if (item.extras.length > 0) {
      if (item.quantity > 0) {
        return <Text>Adicionado!</Text>;
      }
      return (
        <TouchableOpacity
          style={styles.customProductButton}
          onPress={() => setProductToCustomize(item)}>
          <Text style={styles.customProductText}>
            {i18n.t('order.customButton').toUpperCase()}
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <>
        <TouchableOpacity onPress={onPressMinus} style={styles.pressArea}>
          <Icon name="remove-circle" color={Colors.BLACK} size={20} />
        </TouchableOpacity>
        <Text style={styles.countNumber}>{`${item.quantity}/${max}`}</Text>
        <TouchableOpacity onPress={onPressPlus} style={styles.pressArea}>
          <Icon name="add-circle" color={Colors.BLACK} size={20} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.name.toUpperCase()}</Text>
        <Text style={[styles.text, styles.price]}>
          R$ {item.price.toFixed(2)}
        </Text>
        <Text style={[styles.text, styles.description]}>
          {item.description}
        </Text>
      </View>
      <View style={styles.logicContainer}>
        <Image
          style={styles.image}
          source={
            item.image ? { uri: item.image } : require('../assets/image.png')
          }
        />
        <View style={styles.counterContainer}>{_renderButtons()}</View>
      </View>
    </View>
  );
};

export default Product;
