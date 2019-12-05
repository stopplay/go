/**
 * @format
 * @flow
 */

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles/ButtonStyle';

type Props = {
  value: string,
  onPress: Function,
  outline?: boolean,
};

const Button = (props: Props) => {
  const { onPress, value, outline } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, outline ? styles.outline : styles.solid]}>
      <Text
        style={[
          styles.btnText,
          outline ? styles.outlineText : styles.solidText,
        ]}>
        {value.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
