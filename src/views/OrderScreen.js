/**
 * @flow
 * @format
 */

import React, { useRef, useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles from './styles/OrderScreenStyle';
import i18n from '../i18n/i18n';
import Carousel from 'react-native-snap-carousel';
// Contexts
import Context from '../utils/context/Context';
// Components
import Header from '../components/Header';
import ButtonFullWidth from '../components/ButtonFullWidth';
import ProductList from '../components/ProductList';

type Props = {
  navigation: any,
};

const OrderScreen = (props: Props) => {
  const { state, dispatch } = useContext(Context);
  const { currentMenu } = state;
  const [order, setOrder] = useState([]);
  const [orderSize, setOrderSize] = useState(0);
  const [animatedValue] = useState(new Animated.Value(0));
  const carousel: any = useRef();

  useEffect(() => {
    const menuToOrder = currentMenu.products.map(product => ({
      ...product,
      product: {
        name: product.name,
        price: product.price,
      },
      quantity: 0,
    }));
    setOrder(menuToOrder);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQuantity = (action: string, product: Object) => {
    if (action === 'add' && orderSize < 10) {
      setOrderSize(orderSize + 1);
    } else if (action === 'remove' && orderSize > 0) {
      setOrderSize(orderSize - 1);
    }
    const updatedOrder = order.map(item => {
      if (item.product_id === product.product_id) {
        return product;
      } else {
        return item;
      }
    });
    setOrder(updatedOrder);
  };

  const _renderItem = ({ index }) => {
    switch (index) {
      case 0:
        return (
          <ProductList
            products={order.filter(
              product => product.category.toLowerCase() === 'food',
            )}
            maxPerItem={currentMenu.max_quantity_of_same_item}
            handleQuantity={handleQuantity}
          />
        );
      case 1:
        return (
          <ProductList
            products={order.filter(
              product => product.category.toLowerCase() === 'drink',
            )}
            maxPerItem={currentMenu.max_quantity_of_same_item}
            handleQuantity={handleQuantity}
          />
        );
    }
  };

  const { width } = Dimensions.get('screen');

  const _changeView = index => {
    if (index === 1) {
      Animated.spring(animatedValue, {
        toValue: width / 2,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleSubmit = () => {
    const orderProducts = order.filter(product => product.quantity > 0);
    dispatch({
      type: 'CREATE_ORDER',
      payload: {
        typeOfOrder: currentMenu.type_of_menu,
        products: orderProducts,
      },
    });
    if (currentMenu.type_of_menu.toLowerCase() === 'mesa') {
      return props.navigation.navigate('TableCodeScreen');
    } else {
      props.navigation.navigate('CheckoutScreen');
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <Header
          title={i18n.t('order.title')}
          icon="bars"
          onPress={props.navigation.toggleDrawer}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>16:00 - 22:00</Text>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              carousel.current.snapToItem(0);
              _changeView(0);
            }}>
            <Text style={styles.tabText}>
              {i18n.t('order.sections.food').toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              carousel.current.snapToItem(1);
              _changeView(1);
            }}>
            <Text style={styles.tabText}>
              {i18n.t('order.sections.drinks').toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabSelector}>
          <Animated.View
            style={[
              styles.tabSelected,
              { transform: [{ translateX: animatedValue }] },
            ]}
          />
        </View>
      </View>
      <SafeAreaView style={styles.body}>
        <Carousel
          ref={carousel}
          data={[1, 2]}
          renderItem={_renderItem}
          onSnapToItem={index => {
            _changeView(index);
          }}
          sliderWidth={width}
          itemWidth={width}
        />
      </SafeAreaView>
      <View style={styles.footer}>
        <ButtonFullWidth
          value={i18n.t('order.button')}
          onPress={handleSubmit}
          disabled={orderSize === 0}
        />
      </View>
    </View>
  );
};
export default OrderScreen;
