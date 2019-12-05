/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/AddressStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { Colors } from '../theme';

type Props = {
  name: string,
  address: {
    street: string,
    district: string,
    cep: string,
    number: number,
  },
  selected?: boolean,
  onPress: Function,
};

const Address = (props: Props) => {
  const { name, address, selected, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selected]}
      onPress={onPress}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text>
          {`${address.street}, ${address.number} - ${address.district}`}
        </Text>
        <Text>{address.cep}</Text>
      </View>
      {selected && (
        <Icon name="check-circle" size={24} solid color={Colors.PRIMARY} />
      )}
    </TouchableOpacity>
  );
};

export default Address;
