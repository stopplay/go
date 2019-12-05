/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/RadioButtonStyle';

type Props = {
  value: string,
  onPress: Function,
  selected?: boolean,
};
const RadioButton = (props: Props) => {
  const { value, onPress, selected } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.radioContainer}>
        <View style={selected && styles.selectedContainer} />
      </View>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
