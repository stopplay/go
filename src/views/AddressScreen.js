/**
 * @flow
 * @format
 */

import React, { useContext } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import styles from './styles/AddressScreenStyle';
import i18n from '../i18n/i18n';
// Contexts
import Context from '../utils/context/Context';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';

type Props = {
  navigation: any,
};

type Address = {
  name: string,
  number: number,
  street: string,
  district: string,
  cep: string,
};

const AddressScreen = (props: Props) => {
  const { state } = useContext(Context);
  const { addresses } = state.user;

  const _renderAddress = (address: Address) => {
    return (
      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.title}>{address.name.toUpperCase()}</Text>
          <Text>
            {`${address.street}, ${address.number} - ${address.district}`}
          </Text>
          <Text>{address.cep}</Text>
        </View>
      </View>
    );
  };

  const _renderAddressesList = () => {
    if (addresses.length === 0) {
      return (
        <Text style={styles.message}>{i18n.t('addressScreen.message')}</Text>
      );
    }
    return (
      <FlatList
        data={addresses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => _renderAddress(item)}
      />
    );
  };

  const _listStyle = () => {
    if (addresses.length === 0) {
      return {
        justifyContent: 'center',
      };
    }
    return {
      justifyContent: 'flex-start',
    };
  };

  return (
    <View style={styles.scrollContainer}>
      <View style={styles.header}>
        <Header
          title={i18n.t('addressScreen.title')}
          icon="menu"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </View>
      <SafeAreaView style={[styles.body, _listStyle()]}>
        {_renderAddressesList()}
      </SafeAreaView>
      <View style={styles.footer}>
        <ButtonFullWidth
          value={i18n.t('addressScreen.button')}
          onPress={() => props.navigation.navigate('AddAddressScreen')}
        />
      </View>
    </View>
  );
};

export default AddressScreen;
