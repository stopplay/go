/**
 *
 * @format
 * @flow
 */

import React, { useContext, useEffect, useState } from 'react';
import { View, ToastAndroid, ActivityIndicator, Text } from 'react-native';
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
  const [menus, setMenus] = useState([]);
  const { user } = state;

  useEffect(() => {
    (async () => {
      try {
        const menusFetcheds = await Products.getMenus();
        if (menusFetcheds) {
          setMenus(menusFetcheds);
        }
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

  const goToOrder = async (typeOfOrder: string) => {
    try {
      const menusFromType = menus.filter(
        menu => menu.type_of_menu.toLowerCase() === typeOfOrder,
      );

      if (menusFromType.length === 0) {
        return ToastAndroid.show(
          i18n.t('selectMenu.menuMessage'),
          ToastAndroid.LONG,
        );
      }

      let activeMenu = menusFromType.filter(menu => menu.active);
      activeMenu = activeMenu.length === 0 ? menusFromType[0] : activeMenu[0];

      dispatch({
        type: 'SELECTED_MENU',
        payload: activeMenu,
      });
      return props.navigation.navigate('OrderScreen');
    } catch (error) {
      console.log(error);
    }
  };

  const _renderButtons = () => {
    if (menus.length === 0) {
      return (
        <>
          <ActivityIndicator color="grey" size="small" />
          <Text style={styles.loadingMessage}>
            {i18n.t('selectMenu.loadingMessage')}
          </Text>
        </>
      );
    }
    return (
      <>
        <Button
          onPress={() => goToOrder('mesa')}
          value={i18n.t('selectMenu.button.table')}
        />
        <Button
          onPress={() => goToOrder('take away')}
          value={i18n.t('selectMenu.button.deliveryCollection')}
        />
        <Button
          onPress={() => goToBreadClub()}
          value={i18n.t('selectMenu.button.club')}
        />
      </>
    );
  };

  return (
    <View style={[styles.container, styles.paddingContainer]}>
      {_renderButtons()}
    </View>
  );
};

export default SelectMenuScreen;
