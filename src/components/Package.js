/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles/PackageStyle';
import type { PackageType } from '../services/Products';

type Props = {
  item: PackageType,
  onPress: Function,
  selected: boolean,
};

const Package = (props: Props) => {
  const { item, onPress, selected } = props;
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selected]}
      onPress={onPress}>
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.name.toUpperCase()}</Text>
        <Text style={[styles.text, styles.price]}>R$ {item.price}</Text>
        <Text style={[styles.text, styles.description]}>
          {item.description}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image} />
      </View>
    </TouchableOpacity>
  );
};

export default Package;
