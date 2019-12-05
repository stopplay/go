/**
 * @flow
 * @format
 */

import React, { useContext } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import styles from './styles/PaymentsScreenStyle';
import i18n from '../i18n/i18n';
// Contexts
import Context from '../utils/context/Context';
// Types
import type { UserType, PaymentType } from '../utils/context/Context';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';

type Props = {
  navigation: any,
};

const PaymentsScreen = (props: Props) => {
  const { state } = useContext(Context);
  const { user }: { user: UserType } = state;

  const _renderPayment = (payment: PaymentType) => {
    return (
      <View style={styles.paymentContainer}>
        <View>
          <Text style={styles.title}>{payment.cardFlag.toUpperCase()}</Text>
          <Text>{payment.cardNumber}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.scrollContainer}>
      <View style={styles.header}>
        <Header
          title={i18n.t('paymentScreen.title')}
          icon="bars"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </View>
      <SafeAreaView style={styles.body}>
        <FlatList
          data={user.cards}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => _renderPayment(item)}
        />
      </SafeAreaView>
      <View style={styles.footer}>
        <ButtonFullWidth
          value={i18n.t('paymentScreen.button')}
          onPress={() => props.navigation.navigate('AddPaymentScreen')}
        />
      </View>
    </View>
  );
};

export default PaymentsScreen;
