/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/IngredientStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { Colors } from '../theme/index';

type Props = {
  ingredient: any,
  handleQuantity: Function,
};

const Ingredient = (props: Props) => {
  const { ingredient, handleQuantity } = props;
  console.log(ingredient);

  const onPressMinus = () => {
    if (ingredient.quantity > 0) {
      handleQuantity('remove', {
        ...ingredient,
        quantity: ingredient.quantity - 1,
      });
    }
  };

  const onPressPlus = () => {
    if (ingredient.quantity < ingredient.limit) {
      handleQuantity('add', {
        ...ingredient,
        quantity: ingredient.quantity + 1,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{ingredient.ingredient}</Text>
        <Text style={styles.price}>{`+ R$ ${ingredient.price}`}</Text>
      </View>
      <View style={styles.counterContainer}>
        {ingredient.quantity > 0 && (
          <TouchableOpacity onPress={onPressMinus} style={styles.pressArea}>
            <Icon name="minus-circle" color={Colors.BLACK} size={20} />
          </TouchableOpacity>
        )}
        <Text style={styles.countNumber}>
          {ingredient.quantity ? ingredient.quantity : ''}
        </Text>
        <TouchableOpacity
          onPress={onPressPlus}
          style={styles.pressArea}
          disabled={ingredient.quantity === ingredient.limit}>
          <Icon
            name="plus-circle"
            color={
              ingredient.quantity === ingredient.limit
                ? Colors.LIGHTPRIMARY
                : Colors.BLACK
            }
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ingredient;
