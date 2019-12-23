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

  const _handleExtrasNames = () => {
    if (item.extras) {
      const extraNames = item.extras
        .filter(extra => extra.quantity !== 0)
        .map(extra => `${extra.ingredient} (${extra.quantity})`);
      return extraNames.join(' - ');
    }
    const extraNames = item.extra_orders
      .filter(extra => extra.quantity !== 0)
      .map(extra => `${extra.ingredient} (${extra.quantity})`);
    return extraNames.join(' - ');
  };

  const handleTotal = () => {
    let extrasTotal = 0;

    if (item.extras) {
      extrasTotal = item.extras.reduce(
        (result, extra) => result + extra.quantity * parseFloat(extra.price),
        0,
      );
    }

    if (item.extra_orders) {
      extrasTotal = item.extra_orders.reduce(
        (result, extra) => result + extra.quantity * parseFloat(extra.price),
        0,
      );
    }

    return (item.quantity * (item.product.price + extrasTotal)).toFixed(2);
  };

  const _renderExtra = () => {
    if (
      item.extras &&
      item.extras.filter(extra => extra.quantity !== 0).length > 0
    ) {
      return true;
    }
    if (
      item.extra_orders &&
      item.extra_orders.filter(extra => extra.quantity !== 0).length > 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.textColor, styles.textBold]}>
          {item.name
            ? item.name.toUpperCase()
            : item.product.name.toUpperCase()}
        </Text>
        <Text style={[styles.textColor, styles.textInfo]}>{`${i18n.t(
          'checkout.item.quantity',
        )}: ${item.quantity}`}</Text>
        {_renderExtra() && (
          <Text style={[styles.textColor, styles.textInfo]}>{`${i18n.t(
            'checkout.item.extras',
          )}: ${_handleExtrasNames()}`}</Text>
        )}
        <Text style={[styles.textColor, styles.textInfo]}>{`${i18n.t(
          'checkout.item.total',
        )}: R$ ${handleTotal()}`}</Text>
      </View>
      <Image
        source={
          item.image ? { uri: item.image } : require('../assets/image.png')
        }
        style={styles.image}
      />
    </View>
  );
};

export default Item;
