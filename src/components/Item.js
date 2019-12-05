/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles/ItemStyle';
import i18n from '../i18n/i18n';
// Types
import type { ProductOrderType } from '../utils/context/Context';
type Props = {
  item: ProductOrderType,
};

const Item = (props: Props) => {
  const { item } = props;

  const _renderName = () => {
    if (item.name) {
      return item.name.toUpperCase();
    }
    if (item.product.name) {
      return item.product.name.toUpperCase();
    }
    return '';
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.textColor, styles.textBold]}>{_renderName()}</Text>
        <Text style={[styles.textColor, styles.textInfo]}>{`${i18n.t(
          'checkout.item.quantity',
        )}: ${item.quantity}`}</Text>
        <Text style={[styles.textColor, styles.textInfo]}>{`${i18n.t(
          'checkout.item.total',
        )}: R$ ${(item.quantity * item.product.price).toFixed(2)}`}</Text>
      </View>
      <Image
        source={item.image ? item.image : require('../assets/image.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Item;
