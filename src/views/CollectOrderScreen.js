/**
 * @flow
 * @format
 */

import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles/CollectOrderScreenStyle';
import i18n from '../i18n/i18n';
import Toast from 'react-native-root-toast';
// Services
import Orders from '../services/Orders';
// Contexts
import Context from '../utils/context/Context';
import LoadingContext from '../utils/context/LoadingContext';
// Components
import Header from '../components/Header';
import ButtonFullWIdth from '../components/ButtonFullWidth';

type Props = {
  navigation: any,
};

const CollectOrderScreen = (props: Props) => {
  const { state, dispatch } = useContext(Context);
  const { setLoading } = useContext(LoadingContext);
  const { currentOrder } = state;
  const [estimatedTime, setEstimatedTime] = useState('00h00');
  const [innerLoading, setInnerLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await Orders.getEstimateTime();
        if (data) {
          const { estimated_time } = data;
          const hours = Math.floor(estimated_time / 60);
          const minutes = Math.floor((estimated_time - hours * 60) / 60);
          setEstimatedTime(
            `${hours.toString().padStart(2, '0')}h${minutes
              .toString()
              .padStart(2, '0')}`,
          );
        }
        setInnerLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (currentOrder.infos.type_of_order.toLowerCase().includes('clube')) {
        currentOrder.package = state.user.subscriptions[0].package.id;
      }
      const data = await Orders.createOrder(currentOrder);
      if (data) {
        dispatch({
          type: 'CONFIRM_ORDER',
          payload: data,
        });
        setLoading(false);
        props.navigation.navigate('HistoryScreen');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
      });
    }
  };

  let title: string;
  if (currentOrder.infos.type_of_order.toLowerCase() === 'mesa') {
    title = i18n.t('collectOrder.titles.table');
  } else if (
    currentOrder.infos.type_of_order.toLowerCase().includes('collection')
  ) {
    title = i18n.t('collectOrder.titles.collect');
  } else {
    title = i18n.t('collectOrder.titles.delivery');
  }

  const _renderContent = () => {
    if (currentOrder.infos.type_of_order.toLowerCase() === 'mesa') {
      return (
        <>
          <Text style={[styles.textColor, styles.infoText]}>
            {i18n.t('collectOrder.infos.table.textOne')}
          </Text>
          <Text style={[styles.textColor, styles.infoText]}>
            {i18n.t('collectOrder.infos.table.textTwo')}
          </Text>
        </>
      );
    } else {
      return (
        <>
          <Text style={[styles.textColor, styles.infoText]}>
            {i18n.t('collectOrder.infos.collect.textOne')}
          </Text>
          <Text style={styles.clockText}>{estimatedTime}</Text>
          <Text style={[styles.textColor, styles.infoText]}>
            {i18n.t('collectOrder.infos.collect.textTwo')}
          </Text>
        </>
      );
    }
  };

  const _renderLoading = () => {
    if (innerLoading) {
      return <ActivityIndicator size="large" color="grey" />;
    }
    return _renderContent();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title={title}
          icon="keyboard-backspace"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.body}>{_renderLoading()}</View>
      <View style={styles.footer}>
        <ButtonFullWIdth
          value={i18n.t('collectOrder.button')}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default CollectOrderScreen;
