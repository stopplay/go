/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/OrderStyle';
import i18n from '../i18n/i18n';
// Types
import type { Node } from 'react';
import type { ConfirmedOrderType } from '../utils/context/Context';

type Props = {
  item: ConfirmedOrderType,
  onPress?: Function,
};

const Order = (props: Props): Node => {
  const { item, onPress } = props;
  const date = new Date(item.date_ordered);
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.textBold, styles.textColor]}>
          {`Order - ${item.order_code}`.toUpperCase()}
        </Text>
        <Text style={styles.textColor}>{date.toLocaleString()}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.button, styles.textColor]}>
            {i18n.t('history.details')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Order;
