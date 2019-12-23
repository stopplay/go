/**
 *
 * @format
 * @flow
 */

import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles/SelectLoginScreenStyle';
import i18n from '../i18n/i18n';
// Services
import Products from '../services/Products';
import Orders from '../services/Orders';
// Contexts
import Context from '../utils/context/Context';
// Components
import Button from '../components/Button';

type Props = {
  navigation: Object,
};

const SelectMenuScreen = (props: Props) => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  useEffect(() => {
    (async () => {
      try {
        if (state.orderHistory.length === 0) {
          const data = await Orders.getHistory();
          dispatch({
            type: 'LOAD_HISTORY',
            payload: data.reverse(),
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, state.orderHistory.length]);

  const goToBreadClub = async () => {
    if (user.subscriptions.length > 0) {
      const data = await Products.selectMenu(
        user.subscriptions[0].package.menu,
      );
      if (data) {
        data.products = data.products.map(product => ({
          ...product,
          price: 0,
        }));
      }
      dispatch({
        type: 'SELECTED_MENU',
        payload: data,
      });
      return props.navigation.navigate('OrderStack');
    }
    return props.navigation.navigate('ClubStack');
  };

  const goToOrder = async (menuId: number) => {
    try {
      const response = await Products.selectMenu(menuId);
      dispatch({
        type: 'SELECTED_MENU',
        payload: response,
      });
      props.navigation.navigate('OrderStack');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container, styles.paddingContainer]}>
      <Button
        onPress={() => goToOrder(9)}
        value={i18n.t('selectMenu.button.table')}
      />
      <Button
        onPress={() => goToOrder(8)}
        value={i18n.t('selectMenu.button.deliveryCollection')}
      />
      <Button
        onPress={() => goToBreadClub()}
        value={i18n.t('selectMenu.button.club')}
      />
    </View>
  );
};

export default SelectMenuScreen;
