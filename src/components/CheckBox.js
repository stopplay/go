/**
 * @flow
 * @format
 */

import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Metrics, Colors } from '../theme';

type Props = {
  value: any,
  onChange: Function,
  description: string,
};

const CheckBox = (props: Props) => {
  const { value, onChange, description } = props;
  return (
    <TouchableOpacity onPress={onChange} style={styles.checkBoxContainer}>
      <Icon
        color={Colors.PRIMARY}
        size={20}
        name={value ? 'check-box' : 'check-box-outline-blank'}
      />
      <Text style={styles.checkBoxText}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBoxText: {
    marginLeft: 10,
    fontSize: Metrics.text.small,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default CheckBox;
