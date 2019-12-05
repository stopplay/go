/**
 * @flow
 * @format
 */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5Pro';
import { Colors } from '../theme';

type Props = {
  name: any,
  onPress: Function,
  selected: boolean,
};

const CardSelector = (props: Props) => {
  const { name, onPress, selected } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        color={selected ? Colors.PRIMARY : Colors.LIGHTPRIMARY}
        size={55}
        name={name}
      />
    </TouchableOpacity>
  );
};

export default CardSelector;
