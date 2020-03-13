/**
 * @flow
 * @format
 */

import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import i18n from '../i18n/i18n';
import styles from './styles/CustomProductModalStyle';
import { Colors } from '../theme';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// Components
import Button from './Button';
import Ingredient from './Ingredient';
// Context
import Context from '../utils/context/Context';

type Props = {
  visible: boolean,
  onRequestClose: Function,
  addCustomProduct: Function,
  limit: number,
};

const CustomProductModal = (props: Props) => {
  const { visible, onRequestClose, addCustomProduct, limit } = props;
  const { state, dispatch } = useContext(Context);
  const { productToCustomize } = state;
  const [extraSize, setExtraSize] = useState(0);
  const [extras, setExtras] = useState(productToCustomize.extras);
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    setExtras(productToCustomize.extras);
  }, [productToCustomize.extras, state.productToCustomize]);

  const handleCloseModal = () => {
    setExtraSize(0);
    setProductQuantity(1);
    onRequestClose();
  };

  const handleProductQuantity = (action: string) => {
    if (action === 'add' && productQuantity < limit) {
      return setProductQuantity(productQuantity + 1);
    }
    if (action === 'remove' && productQuantity > 1) {
      return setProductQuantity(productQuantity - 1);
    }
  };

  const handleQuantity = (action: string, extra: Object) => {
    if (action === 'add' && extraSize < 6) {
      setExtraSize(extraSize + 1);
    } else if (action === 'remove' && extraSize > 0) {
      setExtraSize(extraSize - 1);
    }
    const updatedExtras = extras.map(item => {
      if (item.id === extra.id) {
        return extra;
      } else {
        return item;
      }
    });
    dispatch({
      type: 'UPDATE_EXTRAS',
      payload: updatedExtras,
    });
    setExtras(updatedExtras);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onRequestClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={[styles.header, styles.paddingHorizontal]}>
            <Text style={styles.categoryTitle}>
              {productToCustomize.name.toUpperCase()}
            </Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Icon name="close" color={Colors.SECONDARY} size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View style={[styles.paddingHorizontal, styles.infoContainer]}>
              <Text style={styles.headerTitle}>
                {i18n.t('customProduct.title')}
              </Text>
            </View>
            <SafeAreaView>
              <FlatList
                data={extras}
                keyExtractor={(extra, index) => index.toString()}
                renderItem={({ item }) => (
                  <Ingredient
                    ingredient={item}
                    handleQuantity={handleQuantity}
                  />
                )}
              />
            </SafeAreaView>
          </View>
          <View style={styles.footer}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() => handleProductQuantity('remove')}
                style={styles.quantityPressAreaButton}>
                <Icon name="remove" size={26} />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{productQuantity}</Text>
              <TouchableOpacity
                onPress={() => handleProductQuantity('add')}
                style={styles.quantityPressAreaButton}>
                <Icon name="add" size={26} />
              </TouchableOpacity>
            </View>
            <Button
              value={i18n.t('customProduct.button')}
              onPress={() => {
                addCustomProduct(productQuantity);
                handleCloseModal();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo<Props>(CustomProductModal);
