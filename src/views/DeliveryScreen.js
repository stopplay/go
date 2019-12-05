/**
 * @flow
 * @format
 */

import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/DeliveryScreenStyle';
import i18n from '../i18n/i18n';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
// Contexts
import Context from '../utils/context/Context';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';
import Button from '../components/Button';
import Address from '../components/Address';
import Payment from '../components/Payment';
import { Colors } from '../theme';

type Props = {
  navigation: any,
};

const DeliveryScreen = (props: Props) => {
  const { state, dispatch } = useContext(Context);
  const { currentOrder, user } = state;
  const [addresses, setAddresses] = useState(user.addresses);
  const [creditCards, setCreditCards] = useState(user.cards);
  const [selectedAddress, setSelectedAddress] = useState(
    user.addresses.filter(addr => addr.active)[0],
  );
  const [selectedCreditCard, setSelectedCreditCard] = useState(
    user.cards.filter(cc => cc.active)[0],
  );

  const handleSubmit = () => {
    dispatch({
      type: 'CREDIT_CARD_SELECTED',
      payload: selectedCreditCard,
    });
    if (currentOrder.infos.type_of_order.toLowerCase() === 'delivery') {
      dispatch({
        type: 'ADDRESS_SELECTED',
        payload: selectedAddress,
      });
    }
    return props.navigation.navigate('CollectOrderScreen');
  };

  const handleAddressSelect = address => {
    setSelectedAddress(address);
    setAddresses(
      addresses.map(addr => {
        if (addr.address_id === address.address_id) {
          return {
            ...addr,
            active: true,
          };
        } else {
          return {
            ...addr,
            active: false,
          };
        }
      }),
    );
  };

  const handleCreditCardSelect = creditCard => {
    setSelectedCreditCard(creditCard);
    setCreditCards(
      creditCards.map(cc => {
        if (cc.id === creditCard.id) {
          return {
            ...cc,
            active: true,
          };
        } else {
          return {
            ...cc,
            active: false,
          };
        }
      }),
    );
  };

  const refreshPayments = () => {
    setCreditCards(user.cards);
    setSelectedCreditCard(user.cards.filter(cc => cc.active)[0]);
  };

  const refreshAddresses = () => {
    setAddresses(user.addresses);
    setSelectedAddress(user.addresses.filter(addr => addr.active)[0]);
  };

  const _renderTitle = () => {
    return currentOrder.infos.type_of_order.toLowerCase().includes('delivery')
      ? i18n.t('delivery.titles.delivery')
      : i18n.t('delivery.titles.payment');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title={_renderTitle()}
          icon="arrow-left"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <SafeAreaView style={[styles.body]}>
        <ScrollView>
          <View style={styles.containerPaddingHorizontal}>
            {currentOrder.infos.type_of_order
              .toLowerCase()
              .includes('delivery') && (
              <View style={styles.infoContainer}>
                <View style={styles.refreshRow}>
                  <Text>{i18n.t('delivery.address')}</Text>
                  <TouchableOpacity onPress={refreshAddresses}>
                    <Icon name="sync" size={20} color={Colors.PRIMARY} />
                  </TouchableOpacity>
                </View>
                <SafeAreaView>
                  {addresses.map((address, index) => {
                    return (
                      <Address
                        key={index}
                        name={address.name}
                        address={address}
                        selected={
                          selectedAddress
                            ? address.address_id === selectedAddress.address_id
                            : false
                        }
                        onPress={() => handleAddressSelect(address)}
                      />
                    );
                  })}
                </SafeAreaView>
                <Button
                  value={i18n.t('delivery.buttons.address')}
                  onPress={() => props.navigation.navigate('AddAddressScreen')}
                  outline
                />
              </View>
            )}
            {!currentOrder.infos.type_of_order
              .toLowerCase()
              .includes('clube') && (
              <View style={[styles.infoContainer, styles.secondContainer]}>
                <View style={styles.refreshRow}>
                  <Text>{i18n.t('delivery.payment')}</Text>
                  <TouchableOpacity onPress={refreshPayments}>
                    <Icon name="sync" size={20} color={Colors.PRIMARY} />
                  </TouchableOpacity>
                </View>
                <SafeAreaView>
                  {creditCards.map((creditCard, index) => {
                    return (
                      <Payment
                        key={index}
                        cardNumber={creditCard.cardNumber}
                        cardFlag={creditCard.cardFlag}
                        selected={
                          selectedCreditCard
                            ? creditCard.id === selectedCreditCard.id
                            : false
                        }
                        onPress={() => handleCreditCardSelect(creditCard)}
                      />
                    );
                  })}
                </SafeAreaView>
                <Button
                  value={i18n.t('delivery.buttons.payment')}
                  onPress={() => props.navigation.navigate('AddPaymentScreen')}
                  outline
                />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.footer}>
        <ButtonFullWidth
          value={i18n.t('delivery.buttons.confirm')}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default DeliveryScreen;
