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
import { formatDateTime, translatedStatusOrder } from '../utils/helpers';

type Props = {
  item: any,
  onPress?: Function,
};

const Order = (props: Props): Node => {
  const { item, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Text style={[styles.textBold, styles.textColor]}>
          {`Order - ${item.order_code}`.toUpperCase()}
        </Text>
        <Text style={styles.textColor}>
          {formatDateTime(item.date_ordered)}
        </Text>
        <Text style={[styles.textBold, styles.textColor]}>
          {i18n.t('history.status')}: {translatedStatusOrder(item.status)}
        </Text>
      </View>
      <View>
        <View>
          <Text style={[styles.button, styles.textColor]}>
            {i18n.t('history.details')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Order;
