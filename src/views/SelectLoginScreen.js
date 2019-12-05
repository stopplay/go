/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/SelectLoginScreenStyle';
import i18n from '../i18n/i18n';
// Components
import Button from '../components/Button';

type Props = {
  navigation: Object,
};

const SelectLoginScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('selectLogin.text')}</Text>
      <Button onPress={_ => _} value={i18n.t('selectLogin.button.sms')} />
      <Button
        onPress={() => props.navigation.navigate('LoginScreen')}
        value={i18n.t('selectLogin.button.email')}
      />
    </View>
  );
};

export default SelectLoginScreen;
