/**
 * @flow
 * @format
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/RoundButtonStyle';

type Props = {
  value: string,
  onPress: Function,
};

const RoundButton = (props: Props) => {
  const { onPress, value } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <Text style={[styles.text]}>{value.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;
