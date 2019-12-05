/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import styles from './styles/ProductStyle';
import { Colors } from '../theme';

type Props = {
  item: {
    name: string,
    price: number,
    image?: string,
    quantity: number,
    description: string,
  },
  max: number,
  handleQuantity: Function,
};

const Product = (props: Props) => {
  const { item, max, handleQuantity } = props;

  const onPressMinus = () => {
    if (item.quantity > 0) {
      handleQuantity('remove', {
        ...item,
        quantity: item.quantity - 1,
      });
    }
  };

  const onPressPlus = () => {
    if (item.quantity < max) {
      handleQuantity('add', {
        ...item,
        quantity: item.quantity + 1,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.name.toUpperCase()}</Text>
        <Text style={[styles.text, styles.price]}>
          R$ {item.price.toFixed(2)}
        </Text>
        <Text style={[styles.text, styles.description]}>
          {item.description}
        </Text>
      </View>
      <View style={styles.logicContainer}>
        <Image style={styles.image} source={require('../assets/image.png')} />
        <View style={styles.counterContainer}>
          <TouchableOpacity
            onPress={() => onPressMinus()}
            style={styles.pressArea}>
            <Icon name="minus-circle" color={Colors.BLACK} size={20} />
          </TouchableOpacity>
          <Text style={styles.countNumber}>{`${item.quantity}/${max}`}</Text>
          <TouchableOpacity
            onPress={() => onPressPlus()}
            style={styles.pressArea}>
            <Icon name="plus-circle" color={Colors.BLACK} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Product;
