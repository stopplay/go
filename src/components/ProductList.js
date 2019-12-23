/**
 * @flow
 * @format
 */

import React from 'react';
import { FlatList } from 'react-native';
// Components
import Product from './Product';

type Items = {
  product_id: number,
  product: {
    name: string,
    price: number,
  },
  category: string,
  name: string,
  price: number,
  image?: string,
  quantity: number,
  description: string,
  extras: Array<any>,
};

type Props = {
  products: Array<Items>,
  maxPerItem: number,
  handleQuantity: Function,
  setProductToCustomize: Function,
};

const ProductList = (props: Props) => {
  const { products, maxPerItem, handleQuantity, setProductToCustomize } = props;
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Product
          item={item}
          max={maxPerItem}
          handleQuantity={handleQuantity}
          setProductToCustomize={setProductToCustomize}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ProductList;
