/**
 * @flow
 * @format
 */

import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import styles from './styles/AddAddressScreenStyle';
import i18n from '../i18n/i18n';
import CheckBox from '@react-native-community/checkbox';
// Hooks
import useForm from '../utils/hooks/Form';
// Contexts
import Context from '../utils/context/Context';
import LoadingContext from '../utils/context/LoadingContext';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';
import InputText from '../components/InputText';
import User from '../services/User';
// import { StackActions } from 'react-navigation';

type Props = {
  navigation: any,
};

const AddAddressScreen = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { setLoading } = useContext(LoadingContext);

  const addAddress = async () => {
    try {
      const { name, street, cep, number, district } = formInputs;
      if (
        name === '' ||
        street === '' ||
        cep === '' ||
        number === '' ||
        district === ''
      ) {
        return ToastAndroid.show(
          i18n.t('addAddress.errors.emptyFields'),
          ToastAndroid.LONG,
        );
      }
      setLoading(true);
      formInputs.number = parseInt(formInputs.number, 0);
      formInputs.active = checked;
      const data = await User.addAddress(formInputs);
      if (data) {
        dispatch({
          type: 'ADDRESS_ADDED',
          payload: data,
        });
        if (state.currentOrder && state.currentOrder.products.length > 0) {
          props.navigation.navigate('DeliveryScreen');
        }
        props.navigation.goBack();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const { formInputs, handleInputChange, handleSubmit } = useForm(
    {
      name: '',
      street: '',
      cep: '',
      number: '',
      district: '',
      complement: '',
    },
    addAddress,
  );

  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <Header
          title={i18n.t('addAddress.title')}
          icon="arrow-left"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <KeyboardAvoidingView style={styles.form}>
        <ScrollView style={styles.scrollContainer}>
          <View style={[styles.row, styles.formGroup]}>
            <InputText
              placeholder={i18n.t('addAddress.placeholders.name')}
              value={formInputs.name}
              onChangeText={text => handleInputChange('name', text)}
            />
          </View>
          <View style={[styles.row, styles.formGroup]}>
            <InputText
              placeholder={i18n.t('addAddress.placeholders.street')}
              value={formInputs.street}
              onChangeText={text => handleInputChange('street', text)}
            />
          </View>
          <View style={[styles.row, styles.formGroup]}>
            <InputText
              placeholder={i18n.t('addAddress.placeholders.cep')}
              typeOfMask="custom"
              maskOptions={{ mask: '99999-999' }}
              value={formInputs.cep}
              onChangeText={text => handleInputChange('cep', text)}
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.row, styles.formGroup]}>
            <View style={styles.formGroupSmaller}>
              <InputText
                placeholder={i18n.t('addAddress.placeholders.number')}
                value={formInputs.number.toString()}
                onChangeText={text => handleInputChange('number', text)}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.formGroupBigger}>
              <InputText
                placeholder={i18n.t('addAddress.placeholders.district')}
                value={formInputs.district}
                onChangeText={text => handleInputChange('district', text)}
              />
            </View>
          </View>
          <View style={[styles.row, styles.formGroup]}>
            <InputText
              placeholder={i18n.t('addAddress.placeholders.complement')}
              value={formInputs.complement}
              onChangeText={text => handleInputChange('complement', text)}
            />
          </View>
          <View style={[styles.row, styles.checkBoxContainer]}>
            <CheckBox value={checked} onChange={() => setChecked(!checked)} />
            <Text style={styles.checkBoxText}>
              {i18n.t('addAddress.checkBox').toUpperCase()}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <ButtonFullWidth
          value={i18n.t('addAddress.button')}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default AddAddressScreen;
