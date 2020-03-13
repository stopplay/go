/**
 * @flow
 * @format
 */

import React, { useContext } from 'react';
import { View, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import styles from './styles/UserDetailsScreenStyle';
import i18n from '../i18n/i18n';
import Context from '../utils/context/Context';
// Services
import User from '../services/User';
// Hooks
import useForm from '../utils/hooks/Form';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';
import InputText from '../components/InputText';

type Props = {
  navigation: any,
};

const UserDetailsScreen = (props: Props) => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const submitForm = async () => {
    if (
      formInputs.name === '' ||
      formInputs.surname === '' ||
      formInputs.cpf === '' ||
      formInputs.phone === '' ||
      formInputs.email === ''
    ) {
      return ToastAndroid.show(
        i18n.t('userDetails.errors.emptyFields'),
        ToastAndroid.LONG,
      );
    }
    const updatedInfos = {
      first_name: formInputs.name,
      last_name: formInputs.surname,
      email: formInputs.email,
      profile: {
        phone_number: formInputs.phone,
        cpf: formInputs.cpf,
      },
    };
    const data = await User.updateProfile(updatedInfos);
    if (data) {
      dispatch({
        type: 'UPDATE_USER',
        payload: data.user,
      });
      return ToastAndroid.show(
        i18n.t('userDetails.message'),
        ToastAndroid.LONG,
      );
    }
  };

  const { formInputs, handleInputChange, handleSubmit } = useForm(
    {
      name: user.first_name,
      surname: user.last_name,
      cpf: user.profile.cpf,
      phone: user.profile.phone_number,
      email: user.email,
    },
    submitForm,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title={i18n.t('userDetails.title')}
          icon="menu"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </View>
      <KeyboardAvoidingView style={styles.form}>
        <InputText
          placeholder={i18n.t('userDetails.placeholders.name')}
          value={formInputs.name}
          onChangeText={text => handleInputChange('name', text)}
          autoCapitalize
        />
        <InputText
          placeholder={i18n.t('userDetails.placeholders.surname')}
          value={formInputs.surname}
          onChangeText={text => handleInputChange('surname', text)}
          autoCapitalize
        />
        <InputText
          placeholder={i18n.t('userDetails.placeholders.cpf')}
          value={formInputs.cpf}
          onChangeText={text => handleInputChange('cpf', text)}
          keyboardType="numeric"
        />
        <InputText
          placeholder={i18n.t('userDetails.placeholders.phone')}
          value={formInputs.phone}
          onChangeText={text => handleInputChange('phone', text)}
          keyboardType="numeric"
        />
        <InputText
          placeholder={i18n.t('userDetails.placeholders.email')}
          value={formInputs.email}
          onChangeText={text => handleInputChange('email', text)}
        />
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <ButtonFullWidth
          value={i18n.t('userDetails.button')}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default UserDetailsScreen;
