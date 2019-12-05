/**
 * @flow
 * @format
 */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/NavButtonStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

type Props = {
  name: string,
  icon: any,
  onPress?: Function,
  rotate?: string,
};

const NavButton = (props: Props) => {
  const { name, icon, onPress, rotate } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon
          name={icon}
          color="white"
          size={20}
          style={{ transform: [{ rotate: rotate ? rotate : '0deg' }] }}
        />
      </View>
      <Text style={styles.text}>{name.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default NavButton;
