/**
 * @format
 * @flow
 */

import React, { useContext, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/RegisterScreenStyle';
import i18n from '../i18n/i18n';
import { setUser } from '../utils/helpers';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
// Hooks
import useRegisterForm from '../utils/hooks/RegisterForm';
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
  const { dispatch } = useContext(Context);
  const { setLoading } = useContext(LoadingContext);
  const [submit, setSubmit] = useState(false);

  const submitForm = async () => {
    try {
      const {
        cpf,
        email,
        name,
        surname,
        phone,
        password,
        confirmPassword,
      } = formInputs;
      if (
        cpf === '' ||
        email === '' ||
        name === '' ||
        surname === '' ||
        phone === '' ||
        password === ''
      ) {
        return ToastAndroid.show(
          i18n.t('register.errors.emptyFields'),
          ToastAndroid.LONG,
        );
      }
      if (password !== confirmPassword) {
        return ToastAndroid.show(
          i18n.t('register.errors.matchPasswords'),
          ToastAndroid.LONG,
        );
      }
      setLoading(true);
      const newUser = {
        first_name: name,
        last_name: surname,
        email,
        password,
        profile: {
          phone_number: phone,
          cpf,
        },
      };
      const response = await User.register(newUser);
      if (response) {
        setUser(response.token);
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
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  };

  const { formInputs, handleInputChange, handleSubmit } = useRegisterForm(
    submitForm,
  );

  const prepareForm = () => {
    const { cpf, name, surname, phone } = formInputs;
    if (cpf === '' || name === '' || surname === '' || phone === '') {
      return ToastAndroid.show(
        i18n.t('register.errors.emptyFields'),
        ToastAndroid.LONG,
      );
    }
    setSubmit(true);
  };

  const _renderForm = () => {
    // Part 2
    if (submit) {
      return (
        <>
          <View style={styles.progressContainer}>
            <Icon name="user-circle" solid color="black" size={24} />
            <View style={[styles.progressSeparator, styles.doneSeparator]} />
            <Icon name="check-circle" color="black" size={24} />
            <View style={[styles.progressSeparator, styles.doneSeparator]} />
            <Icon name="check-circle" color="grey" size={24} />
          </View>
          <InputText
            placeholder={i18n.t('register.email')}
            value={formInputs.email}
            onChangeText={text => handleInputChange('email', text)}
          />
          <InputText
            placeholder={i18n.t('register.password')}
            value={formInputs.password}
            onChangeText={text => handleInputChange('password', text)}
            hide
          />
          <InputText
            placeholder={i18n.t('register.confirmPassword')}
            value={formInputs.confirmPassword}
            onChangeText={text => handleInputChange('confirmPassword', text)}
            hide
          />
          <Button
            value={i18n.t('register.button')}
            onPress={() => handleSubmit()}
          />
        </>
      );
    }
    return (
      <>
        <View style={styles.progressContainer}>
          <Icon name="user-circle" solid color="black" size={24} />
          <View style={[styles.progressSeparator, styles.doneSeparator]} />
          <Icon name="check-circle" color="grey" size={24} />
          <View style={styles.progressSeparator} />
          <Icon name="check-circle" color="grey" size={24} />
        </View>
        <InputText
          placeholder={i18n.t('register.name')}
          value={formInputs.name}
          onChangeText={text => handleInputChange('name', text)}
          autoCapitalize
        />
        <InputText
          placeholder={i18n.t('register.surname')}
          value={formInputs.surname}
          onChangeText={text => handleInputChange('surname', text)}
          autoCapitalize
        />
        <InputText
          placeholder={i18n.t('register.cpf')}
          value={formInputs.cpf}
          typeOfMask="cpf"
          keyboardType="numeric"
          onChangeText={text => handleInputChange('cpf', text)}
        />
        <InputText
          placeholder={i18n.t('register.phone')}
          typeOfMask="cel-phone"
          maskOptions={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99)',
          }}
          value={formInputs.phone}
          keyboardType="phone-pad"
          onChangeText={text => handleInputChange('phone', text)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={prepareForm} style={styles.button}>
            <Text style={styles.buttonText}>
              {i18n.t('register.nextButton').toUpperCase()}
            </Text>
            <Icon name="arrow-right" color="white" size={14} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View style={[styles.contentContainer]}>
      <KeyboardAvoidingView style={[styles.form]}>
        {_renderForm()}
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
