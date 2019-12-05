/**
 * @flow
 * @format
 */

import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/SideMenuStyle';
import i18n from '../i18n/i18n';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
// Context
import Context from '../utils/context/Context';
// Components
import NavButton from './NavButton';
import AsyncStorage from '@react-native-community/async-storage';

type Props = {
  navigation: any,
};

const SideMenu = (props: Props) => {
  const { state } = useContext(Context);
  const { user } = state;
  let address = user.addresses.filter(addr => addr.active);
  address = address.length > 0 ? address[0] : null;

  const handleLogout = async () => {
    await AsyncStorage.removeItem('jwtToken');
    props.navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity
            onPress={props.navigation.toggleDrawer}
            style={styles.pressArea}>
            <Icon name="times" color="black" size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.userNameText}>
            {`${user.first_name} ${user.last_name}`}
          </Text>
          {address && (
            <Text>
              {`${address.street}, ${address.number} - ${address.district}`}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.navigationContainer}>
        <NavButton
          name={i18n.t('sideMenu.home')}
          icon="home"
          onPress={() => props.navigation.navigate('MenuStack')}
        />
        <NavButton
          name={i18n.t('sideMenu.userDetails')}
          icon="user"
          onPress={() => props.navigation.navigate('UserDetailsScreen')}
        />
        <NavButton
          name={i18n.t('sideMenu.address')}
          icon="map-marker-alt"
          onPress={() => props.navigation.navigate('AddressScreen')}
        />
        <NavButton
          name={i18n.t('sideMenu.paymentMethods')}
          icon="money-bill"
          onPress={() => props.navigation.navigate('PaymentsScreen')}
        />
        <NavButton
          name={i18n.t('sideMenu.orderHistory')}
          icon="history"
          onPress={() => props.navigation.navigate('HistoryScreen')}
        />
        <NavButton
          name={i18n.t('sideMenu.logout')}
          icon="sign-out-alt"
          rotate="180deg"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

export default SideMenu;
