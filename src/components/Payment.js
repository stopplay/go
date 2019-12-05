/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/PaymentStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { Colors } from '../theme';

type Props = {
  cardNumber: string,
  cardFlag: string,
  selected?: boolean,
  onPress: Function,
};

const Payment = (props: Props) => {
  const { cardNumber, cardFlag, selected, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selected]}
      onPress={onPress}>
      <View>
        <Text style={[styles.title]}>{cardFlag.toUpperCase()}</Text>
        <Text style={[styles.title, styles.info]}>{cardNumber}</Text>
      </View>
      {selected && (
        <Icon name="check-circle" size={24} solid color={Colors.PRIMARY} />
      )}
    </TouchableOpacity>
  );
};

export default Payment;
