/**
 * @format
 * @flow
 */

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles/ButtonFullWidthStyle';

type Props = {
  value: string,
  onPress: Function,
  disabled?: boolean,
};

const Button = (props: Props) => {
  const { onPress, value, disabled } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, disabled && styles.disabled]}
      disabled={disabled}>
      <Text style={styles.btnText}>{value.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default Button;
