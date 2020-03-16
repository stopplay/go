/**
 * @format
 * @flow
 */

import React, { useState, useContext } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-root-toast';
import styles from './styles/LoginScreenStyle';
import i18n from '../i18n/i18n';
import { setUser } from '../utils/helpers';
// Contexts
import Context from '../utils/context/Context';
import LoadingContext from '../utils/context/LoadingContext';
// Services
import User from '../services/User';
// Components
import Button from '../components/Button';
import InputText from '../components/InputText';

type Props = {
  navigation: Object,
};

const LoginScreen = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(Context);
  const { setLoading } = useContext(LoadingContext);

  const handleSubmit = async () => {
    if (email === '' || password === '') {
      Toast.show(i18n.t('login.errors.emptyFields'), {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
      });
    } else {
      try {
        setLoading(true);
        const response = await User.login({
          email,
          password,
        });
        if (response) {
          await setUser(response.token);
          dispatch({
            type: 'LOGIN_USER',
            payload: {
              user: response.user,
              accessToken: response.token,
            },
          });
          setLoading(false);
          props.navigation.navigate('SelectMenuScreen');
        }
      } catch (error) {
        setLoading(false);
        Toast.show(error.message, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView style={[styles.container, styles.paddingContainer]}>
      <View style={styles.content}>
        <View />
        <View style={styles.form}>
          <InputText
            placeholder={i18n.t('login.email')}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor="white"
          />
          <InputText
            placeholder={i18n.t('login.password')}
            value={password}
            placeholderTextColor="white"
            onChangeText={text => setPassword(text)}
            hide
          />
          <Button
            onPress={() => handleSubmit()}
            value={i18n.t('login.loginBtn')}
          />
        </View>
        <View style={styles.registerContainer}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => props.navigation.navigate('RegisterScreen')}>
            <Text style={styles.registerTextColor}>
              {i18n.t('login.registerText')}
            </Text>
            <Text style={[styles.textBold, styles.registerTextColor]}>
              {' '}
              {i18n.t('login.registerButton')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
