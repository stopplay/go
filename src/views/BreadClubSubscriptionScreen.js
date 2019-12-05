/**
 * @flow
 * @format
 */

import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles/BreadClubSubscriptionScreenStyle';
import i18n from '../i18n/i18n';
// Contexts
import Context from '../utils/context/Context';
// Hooks
import useForm from '../utils/hooks/Form';
// Services
import Products from '../services/Products';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';
import InputText from '../components/InputText';
import ConfirmSubscribe from '../components/ConfirmSubscribe';

type Props = {
  navigation: any,
};

const BreadClubSubscriptionScreen = (props: Props) => {
  const [agreement, setAgreement] = useState(false);
  const { dispatch } = useContext(Context);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const clubPackage = props.navigation.getParam('package');

  const clubSubscribe = async () => {
    console.log(formInputs);
    if (
      formInputs.cardNumber === '' ||
      formInputs.cvv === '' ||
      formInputs.expirationDate === '' ||
      formInputs.cardholder === '' ||
      formInputs.cpf === ''
    ) {
      return ToastAndroid.show(
        i18n.t('club.sub.errors.emptyFields'),
        ToastAndroid.LONG,
      );
    }
    formInputs.cvv = parseInt(formInputs.cvv, 0);
    const data = await Products.clubSubscribe(clubPackage.id, formInputs);
    if (data) {
      setShowConfirmModal(true);
      dispatch({
        type: 'PACKAGE_SUBSCRIPTION',
        payload: data,
      });
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
    clubSubscribe,
  );

  const confirmFeedback = () => {
    setShowConfirmModal(false);
    props.navigation.navigate('SelectMenuScreen');
  };

  return (
    <View style={styles.container}>
      <ConfirmSubscribe visible={showConfirmModal} onPress={confirmFeedback} />
      <View style={styles.header}>
        <Header
          title={i18n.t('club.sub.title')}
          icon="arrow-left"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.packageInfo}>
          <Text style={styles.packageInfoText}>{`${i18n
            .t('club.sub.total')
            .toUpperCase()}: R$: ${clubPackage.price}`}</Text>
          <Text style={styles.packageInfoText}>{`${i18n
            .t('club.sub.package')
            .toUpperCase()}: ${clubPackage.name}`}</Text>
        </View>
        <ScrollView style={styles.form}>
          <View style={[styles.row]}>
            <InputText
              placeholder={i18n.t('club.sub.placeholders.cardNumber')}
              value={formInputs.cardNumber}
              typeOfMask="credit-card"
              maskOptions={{ obfuscated: false }}
              keyboardType="numeric"
              onChangeText={text => handleInputChange('cardNumber', text)}
            />
          </View>
          <View style={[styles.row, styles.rowWithSpace]}>
            <View style={styles.formGroupCVV}>
              <InputText
                placeholder={i18n.t('club.sub.placeholders.cvv')}
                typeOfMask="custom"
                maskOptions={{ mask: '999' }}
                value={formInputs.cvv.toString()}
                onChangeText={text => handleInputChange('cvv', text)}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.formGroupExp}>
              <InputText
                placeholder={i18n.t('club.sub.placeholders.expDate')}
                typeOfMask="datetime"
                maskOptions={{ format: 'MM/YY' }}
                value={formInputs.expirationDate}
                onChangeText={text => handleInputChange('expirationDate', text)}
              />
            </View>
          </View>
          <View style={[styles.row]}>
            <InputText
              placeholder={i18n.t('club.sub.placeholders.cardholder')}
              value={formInputs.cardHolder}
              onChangeText={text => handleInputChange('cardHolder', text)}
            />
          </View>
          <View style={[styles.row]}>
            <InputText
              placeholder={i18n.t('club.sub.placeholders.cpf')}
              typeOfMask="cpf"
              value={formInputs.cpf}
              onChangeText={text => handleInputChange('cpf', text)}
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.row, styles.agreeContainer]}>
            <CheckBox
              value={agreement}
              onChange={() => setAgreement(!agreement)}
            />
            <View style={styles.agreeTextContainer}>
              <Text style={styles.agreeText}>
                {i18n.t('club.sub.agreement')}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <ButtonFullWidth
          value={i18n.t('club.sub.button')}
          disabled={agreement === false}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default BreadClubSubscriptionScreen;
