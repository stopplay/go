/**
 * @flow
 * @format
 */

import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-root-toast';
import styles from './styles/PaymentsScreenStyle';
import i18n from '../i18n/i18n';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Colors } from '../theme';
// Contexts
import Context from '../utils/context/Context';
// Types
import type { UserType, PaymentType } from '../utils/context/Context';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';
import ConfirmDelete from '../components/ConfirmDelete';
// Services
import User from '../services/User';

type Props = {
  navigation: any,
};

const PaymentsScreen = (props: Props) => {
  const { state, dispatch } = useContext(Context);
  const { user }: { user: UserType } = state;
  const [showDelete, setShowDelete] = useState(false);
  const [currentCC, setCurrentCC] = useState({});

  const removeCreditCard = async () => {
    try {
      const data = await User.removeCreditCard(currentCC.id);
      if (data) {
        dispatch({
          type: 'CARD_REMOVED',
          payload: currentCC.id,
        });
        setShowDelete(false);
        Toast.show(data.message, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
        });
      }
    } catch (error) {}
  };

  const selectCurrentCC = (creditCard: PaymentType) => {
    setCurrentCC(creditCard);
    setShowDelete(true);
  };

  const _renderPayment = (payment: PaymentType) => {
    return (
      <View style={styles.paymentContainer}>
        <View>
          <Text style={styles.title}>{payment.cardFlag.toUpperCase()}</Text>
          <Text style={styles.cardNumber}>{payment.cardNumber}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.pressTrashArea}
            onPress={() => selectCurrentCC(payment)}>
            <Icon name="delete" size={16} color={Colors.RED} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.scrollContainer}>
      <ConfirmDelete
        visible={showDelete}
        message={i18n.t('paymentScreen.deleteMessage')}
        buttonsValue={{
          cancel: i18n.t('paymentScreen.deleteButtons.cancel'),
          confirm: i18n.t('paymentScreen.deleteButtons.confirm'),
        }}
        onPress={removeCreditCard}
        onRequestClose={() => setShowDelete(false)}
      />
      <View style={styles.header}>
        <Header
          title={i18n.t('paymentScreen.title')}
          icon="menu"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </View>
      <SafeAreaView style={styles.body}>
        <FlatList
          data={user.cards}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => _renderPayment(item)}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              {i18n.t('paymentScreen.emptyList')}
            </Text>
          }
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
