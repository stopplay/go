/**
 * @flow
 * @format
 */

import React, {
  useState,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import styles from './styles/AddAddressScreenStyle';
import i18n from '../i18n/i18n';
import { TextInputMask } from 'react-native-masked-text';
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
// Services
import User from '../services/User';
// import { StackActions } from 'react-navigation';

type Props = {
  navigation: any,
};

const AddAddressScreen = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { setLoading } = useContext(LoadingContext);
  const cepInputRef = useRef<TextInputMask.TextMaskInstance>();

  const handleBackNavigation = useCallback(() => {
    if (state.currentOrder && state.currentOrder.products.length > 0) {
      return props.navigation.navigate('DeliveryScreen');
    }
    return props.navigation.goBack();
  }, [props.navigation, state.currentOrder]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackNavigation);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackNavigation,
      );
    };
  }, [handleBackNavigation]);

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
        handleBackNavigation();
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

  const validateAddress = async () => {
    try {
      const cepValue = cepInputRef.current.getRawValue();
      if (cepValue === '') {
        return ToastAndroid.show(
          i18n.t('addAddress.errors.emptyCep'),
          ToastAndroid.LONG,
        );
      }
      const data = await User.validateCEP(cepValue);
      if (data) {
        formInputs.street = data.logradouro;
        handleInputChange('district', data.bairro);
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show(error.message, ToastAndroid.LONG);
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <Header
          title={i18n.t('addAddress.title')}
          icon="keyboard-backspace"
          onPress={handleBackNavigation}
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
            <View style={styles.cpfInput}>
              <TextInputMask
                placeholder={i18n.t('addAddress.placeholders.cep')}
                type="zip-code"
                value={formInputs.cep}
                onChangeText={text => handleInputChange('cep', text)}
                keyboardType="numeric"
                style={styles.input}
                ref={cepInputRef}
              />
            </View>
            <TouchableOpacity
              style={styles.cpfVerifyButton}
              onPress={validateAddress}>
              <Text>{i18n.t('addAddress.searchCep')}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, styles.formGroup]}>
            <InputText
              placeholder={i18n.t('addAddress.placeholders.street')}
              value={formInputs.street}
              onChangeText={text => handleInputChange('street', text)}
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
