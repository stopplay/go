/**
 * @flow
 * @format
 */

import React, { useState, useContext } from 'react';
import { View, Text, ToastAndroid, FlatList, SafeAreaView } from 'react-native';
import styles from './styles/TableCodeScreenStyle';
import i18n from '../i18n/i18n';
// Contexts
import Context from '../utils/context/Context';
// Components
import RoundButton from '../components/RoundButton';

type Props = {
  navigation: any,
};

const TableCodeScreen = (props: Props) => {
  const { dispatch } = useContext(Context);
  const tables = [];

  for (let i = 1; i <= 20; i++) {
    tables.push(i);
  }

  const submitTableCode = tableCode => {
    dispatch({
      type: 'SET_TABLE_CODE',
      payload: tableCode.toString(),
    });
    props.navigation.navigate('CheckoutScreen');
  };

  return (
    <View style={[styles.container, styles.paddingContainer]}>
      <Text style={styles.title}>{i18n.t('tableCode.description')}</Text>
      <SafeAreaView style={styles.buttonsContainer}>
        <FlatList
          data={tables}
          keyExtractor={table => table.toString()}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <RoundButton
                value={item.toString()}
                onPress={() => submitTableCode(item.toString())}
              />
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default TableCodeScreen;
