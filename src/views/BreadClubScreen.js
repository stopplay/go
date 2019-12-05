/**
 * @flow
 * @format
 */

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles/BreadClubScreenStyle';
import i18n from '../i18n/i18n';
import Colors from '../theme/Colors';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';
import Package from '../components/Package';
// Services
import Products from '../services/Products';

type Props = {
  navigation: any,
};

const BreadClubScreen = (props: Props) => {
  const [packages, setPackages] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await Products.getPackages();
      if (data) {
        setPackages(s => data);
      }
    })();
  }, []);

  const handlePackageSelect = item => {
    setActiveItem(item);
    setPackages(
      packages.map(pack => {
        if (pack.name === item.name) {
          return {
            ...pack,
            selected: true,
          };
        } else {
          return {
            ...pack,
            selected: false,
          };
        }
      }),
    );
  };

  const handleSubmit = () => {
    console.log(activeItem);
    props.navigation.navigate('BreadClubSubscriptionScreen', {
      package: activeItem,
    });
  };

  const _renderPackages = () => {
    if (packages.length === 0) {
      return <ActivityIndicator size="small" color={Colors.PRIMARY} />;
    }
    return (
      <FlatList
        data={packages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <Package
              item={item}
              onPress={() => handlePackageSelect(item)}
              selected={item.selected}
            />
          );
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          title={i18n.t('club.title')}
          icon="bars"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.textDescription}>{i18n.t('club.description')}</Text>
        {_renderPackages()}
      </View>
      <View style={styles.footer}>
        <ButtonFullWidth
          value={i18n.t('club.button')}
          disabled={activeItem === null}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default BreadClubScreen;
