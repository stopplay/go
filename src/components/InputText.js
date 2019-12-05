/**
 * @format
 * @flow
 */

import React from 'react';
import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles/InputTextStyle';
import { Colors } from '../theme';

type Props = {
  value: string,
  onChangeText: Function,
  placeholder: string,
  hide?: boolean,
  typeOfMask?: string,
  autoCapitalize?: boolean,
  keyboardType?: any,
  maskOptions?: {},
};

const InputText = (props: Props) => {
  const {
    value,
    onChangeText,
    placeholder,
    hide,
    autoCapitalize,
    keyboardType,
    typeOfMask,
    maskOptions,
  } = props;

  const _renderInput = () => {
    if (typeOfMask) {
      return (
        <TextInputMask
          style={styles.inputText}
          type={typeOfMask}
          options={maskOptions ? maskOptions : {}}
          placeholder={placeholder}
          placeholderTextColor={Colors.LIGHTBLACK}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize ? 'sentences' : 'none'}
          autoCorrect={false}
          secureTextEntry={hide ? hide : false}
          keyboardType={keyboardType ? keyboardType : 'default'}
        />
      );
    } else {
      return (
        <TextInput
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor={Colors.LIGHTBLACK}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize={autoCapitalize ? 'sentences' : 'none'}
          autoCorrect={false}
          secureTextEntry={hide ? hide : false}
          keyboardType={keyboardType ? keyboardType : 'default'}
        />
      );
    }
  };

  return _renderInput();
};

export default InputText;
