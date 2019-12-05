/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import i18n from '../i18n/i18n';
import styles from './styles/DetailsScreenStyle';
// Types
import type { ConfirmedOrderType } from '../utils/context/Context';
// Components
import Header from '../components/Header';
import Item from '../components/Item';

type Props = {
  navigation: any,
};

const DetailsScreen = (props: Props) => {
  const order: ConfirmedOrderType = props.navigation.getParam('order');
  const date = new Date(order.date_ordered);

  const typeOfOrder = {
    'O-M': 'details.typeOfOrder.table',
    'O-D': 'details.typeOfOrder.delivery',
    'O-C': 'details.typeOfOrder.collection',
    'BC-D': 'details.typeOfOrder.club.delivery',
    'BC-C': 'details.typeOfOrder..clubcollection',
  };

  const totalCheck = (): string => {
    const total = order.items.reduce(
      (result, item) => result + item.quantity * item.product.price,
      0,
    );
    return total.toFixed(2);
  };

  const _renderTableCode = () => {
    if (order.table_code && order.table_code !== '') {
      return (
        <View style={styles.row}>
          <Text
            style={[styles.tableInfoText, styles.textColor, styles.boldText]}>
            {i18n.t('details.tableCode').toUpperCase()}:
          </Text>
          <Text style={[styles.tableInfoText, styles.textColor]}>
            {` ${order.table_code ? order.table_code : ''}`}
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title={i18n.t('details.title')}
          icon="arrow-left"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.tableInfoContainer}>
          <View style={styles.row}>
            <Text
              style={[styles.tableInfoText, styles.textColor, styles.boldText]}>
              {i18n.t('details.total').toUpperCase()}:
            </Text>
            <Text style={[styles.tableInfoText, styles.textColor]}>
              {` R$ ${totalCheck()}`}
            </Text>
          </View>
          {_renderTableCode()}
          <View style={styles.row}>
            <Text
              style={[styles.tableInfoText, styles.textColor, styles.boldText]}>
              {i18n.t('details.type').toUpperCase()}:
            </Text>
            <Text style={[styles.tableInfoText, styles.textColor]}>
              {` ${i18n.t(typeOfOrder[order.type_of_order.toUpperCase()])}`}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[styles.tableInfoText, styles.textColor, styles.boldText]}>
              {i18n.t('details.status').toUpperCase()}:
            </Text>
            <Text style={[styles.tableInfoText, styles.textColor]}>
              {` ${order.status}`}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[styles.tableInfoText, styles.textColor, styles.boldText]}>
              {i18n.t('details.date').toUpperCase()}:
            </Text>
            <Text style={[styles.tableInfoText, styles.textColor]}>
              {` ${date.toLocaleString()}`}
            </Text>
          </View>
        </View>
        <FlatList
          data={order.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Item item={item} />}
          style={styles.flatListContainer}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
