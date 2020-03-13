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
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/AddressScreenStyle';
import i18n from '../i18n/i18n';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Colors } from '../theme';
// Contexts
import Context from '../utils/context/Context';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';
import ConfirmDelete from '../components/ConfirmDelete';
// Services
import User from '../services/User';

type Props = {
  navigation: any,
};

type Address = {
  address_id: number,
  name: string,
  number: number,
  street: string,
  district: string,
  cep: string,
};

const AddressScreen = (props: Props) => {
  const { state, dispatch } = useContext(Context);
  const { addresses } = state.user;
  const [showDelete, setShowDelete] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({});

  const removeAddress = async () => {
    try {
      const data = await User.removeAddress(currentAddress.address_id);
      if (data) {
        dispatch({
          type: 'ADDRESS_REMOVED',
          payload: currentAddress.address_id,
        });
        setShowDelete(false);
        ToastAndroid.show(data.message, ToastAndroid.LONG);
      }
    } catch (error) {}
  };

  const selectCurrentAddress = (address: Address) => {
    setCurrentAddress(address);
    setShowDelete(true);
  };

  const _renderAddress = (address: Address) => {
    return (
      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.title}>
            {address.name ? address.name.toUpperCase() : ''}
          </Text>
          <Text>
            {`${address.street}, ${address.number} - ${address.district}`}
          </Text>
          <Text>{address.cep}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.pressTrashArea}
            onPress={() => selectCurrentAddress(address)}>
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
        message={i18n.t('addressScreen.deleteMessage')}
        buttonsValue={{
          cancel: i18n.t('addressScreen.deleteButtons.cancel'),
          confirm: i18n.t('addressScreen.deleteButtons.confirm'),
        }}
        onPress={removeAddress}
        onRequestClose={() => setShowDelete(false)}
      />
      <View style={styles.header}>
        <Header
          title={i18n.t('addressScreen.title')}
          icon="menu"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </View>
      <SafeAreaView style={styles.body}>
        <FlatList
          data={addresses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => _renderAddress(item)}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              {i18n.t('addressScreen.message')}
            </Text>
          }
        />
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
