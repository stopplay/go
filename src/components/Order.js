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
import { formatDateTime } from '../utils/helpers';

type Props = {
  item: any,
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
        <Text style={styles.textColor}>{formatDateTime(date)}</Text>
        <Text style={[styles.textBold, styles.textColor]}>
          {i18n.t('history.status')}: {item.status}
        </Text>
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
