/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/HeaderStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { Colors } from '../theme';

type Props = {
  title: string,
  icon: any,
  onPress?: Function,
};

const Header = (props: Props) => {
  const { title, icon, onPress } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={icon} color={Colors.PRIMARY} size={22} />
      </TouchableOpacity>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </View>
  );
};

export default Header;
