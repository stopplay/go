/**
 * @flow
 * @format
 */

import React, { useState, useContext, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  BackHandler,
} from 'react-native';
import styles from './styles/AddPaymentScreenStyle';
import i18n from '../i18n/i18n';
import Toast from 'react-native-root-toast';
// Services
import User from '../services/User';
// Hooks
import useForm from '../utils/hooks/Form';
// Contexts
import Context from '../utils/context/Context';
import LoadingContext from '../utils/context/LoadingContext';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';
import InputText from '../components/InputText';
import CardSelector from '../components/CardSelector';
import CheckBox from '../components/CheckBox';

type Props = {
  navigation: any,
};

const AddPaymentScreen = (props: Props) => {
  const { state, dispatch } = useContext(Context);
  const { setLoading } = useContext(LoadingContext);
  const [checked, setChecked] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const addPayment = async () => {
    try {
      if (
        formInputs.cardNumber === '' ||
        formInputs.cvv === '' ||
        formInputs.expirationDate === '' ||
        formInputs.cardHolder === '' ||
        formInputs.cpf === ''
      ) {
        return Toast.show(i18n.t('addPayment.errors.emptyFields'), {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
        });
      }
      if (!selectedCard) {
        return Toast.show(i18n.t('addPayment.errors.cardFlag'), {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
        });
      }
      setLoading(true);
      formInputs.cvv = parseInt(formInputs.cvv, 0);
      formInputs.cardFlag = selectedCard;
      formInputs.active = checked;
      const data = await User.addCreditCard(formInputs);
      if (data) {
        dispatch({
          type: 'CARD_ADDED',
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
      cardNumber: '',
      cvv: '',
      expirationDate: '',
      cardHolder: '',
      cpf: '',
    },
    addPayment,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title={i18n.t('addPayment.title')}
          icon="keyboard-backspace"
          onPress={handleBackNavigation}
        />
      </View>
      <KeyboardAvoidingView style={styles.body}>
        <ScrollView style={styles.scrollContainer}>
          <View style={[styles.row, styles.cardsContainer]}>
            <CardSelector
              name="cc-visa"
              onPress={() => setSelectedCard('visa')}
              selected={selectedCard === 'visa'}
            />
            <CardSelector
              name="cc-mastercard"
              onPress={() => setSelectedCard('mastercard')}
              selected={selectedCard === 'mastercard'}
            />
          </View>
          <View>
            <View style={[styles.row, styles.formGroup]}>
              <InputText
                placeholder={i18n.t('addPayment.placeholders.cardNumber')}
                typeOfMask="credit-card"
                maskOptions={{ obfuscated: false }}
                value={formInputs.cardNumber}
                onChangeText={text => handleInputChange('cardNumber', text)}
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.row, styles.formGroup]}>
              <View style={styles.formGroupSmaller}>
                <InputText
                  placeholder={i18n.t('addPayment.placeholders.cvv')}
                  typeOfMask="custom"
                  maskOptions={{ mask: '999' }}
                  value={formInputs.cvv.toString()}
                  onChangeText={text => handleInputChange('cvv', text)}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.formGroupBigger}>
                <InputText
                  placeholder={i18n.t('addPayment.placeholders.expirationDate')}
                  typeOfMask="datetime"
                  maskOptions={{ format: 'MM/YY' }}
                  value={formInputs.expirationDate}
                  onChangeText={text =>
                    handleInputChange('expirationDate', text)
                  }
                />
              </View>
            </View>
            <View style={[styles.row, styles.formGroup]}>
              <InputText
                placeholder={i18n.t('addPayment.placeholders.cardholder')}
                value={formInputs.cardHolder}
                onChangeText={text => handleInputChange('cardHolder', text)}
              />
            </View>
            <View style={[styles.row, styles.formGroup]}>
              <InputText
                placeholder={i18n.t('addPayment.placeholders.cpf')}
                typeOfMask="cpf"
                value={formInputs.cpf}
                onChangeText={text => handleInputChange('cpf', text)}
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.row, styles.checkBoxContainer]}>
              <CheckBox
                value={checked}
                onChange={() => setChecked(!checked)}
                description={i18n.t('addPayment.checkBox').toUpperCase()}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <ButtonFullWidth
          value={i18n.t('addPayment.button')}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default AddPaymentScreen;
