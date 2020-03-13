/**
 * @flow
 * @format
 */

import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import i18n from '../i18n/i18n';
import styles from './styles/HistoryScreenStyle';
// Contexts
import Context from '../utils/context/Context';
// Types
import type { ConfirmedOrderType } from '../utils/context/Context';
// Components
import Header from '../components/Header';
import Order from '../components/Order';
import Orders from '../services/Orders';

type Props = {
  navigation: any,
};

const History = (props: Props) => {
  const { state, dispatch } = useContext(Context);
  const [refreshing, setRefreshing] = useState(false);
  const { orderHistory }: { orderHistory: Array<ConfirmedOrderType> } = state;
  const setCurrentOrder = (order: ConfirmedOrderType): void => {
    props.navigation.navigate('DetailsScreen', { order });
  };

  // Fetch History when refresh is triggered
  useEffect(() => {
    (async () => {
      if (refreshing) {
        const data = await Orders.getHistory();
        console.log(data);
        dispatch({
          type: 'LOAD_HISTORY',
          payload: data.reverse(),
        });
        setRefreshing(false);
      }
    })();
  }, [refreshing, dispatch]);

  return (
    <View style={styles.scrollContainer}>
      <View style={styles.header}>
        <Header
          title={i18n.t('history.title')}
          icon="menu"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </View>
      <SafeAreaView style={styles.body}>
        <FlatList
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
          data={orderHistory}
          keyExtractor={item => item.order_code}
          renderItem={({ item }) => (
            <Order item={item} onPress={() => setCurrentOrder(item)} />
          )}
          style={styles.flatListContainer}
        />
      </SafeAreaView>
    </View>
  );
};

export default History;
