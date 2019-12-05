/**
 * @flow
 * @format
 */

import api from './config';
import i18n from '../i18n/i18n';
export type ProductType = {
  product_id: number,
  name: string,
  price: number,
  description: string,
  image?: string,
  quantity?: number,
};

export type PackageType = {
  id: number,
  menu: number,
  name: string,
  price: string,
  quantity: number,
  image?: any,
  description?: string,
  selected?: boolean,
};

export type MenuType = {
  menu_id: number,
  name: string,
  type_of_menu: string,
  products: Array<ProductType>,
  max_quantity_of_items: number, // Size of Order
  max_quantity_of_same_item: number, // Max Amount of same item
  type_of_menu_prefix: string,
};

const selectMenu = async (menuId: number): Promise<?MenuType> => {
  try {
    const response = await api.get(`products/api/menus/${menuId}/`);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

const getAll = (): Array<ProductType> => {
  return [
    {
      product_id: 1,
      name: 'Sashimi',
      price: 10,
      stock: -37,
      description: 'Sashimi',
    },
    {
      product_id: 2,
      name: 'Pizza',
      price: 20,
      stock: -37,
      description: 'Pizza',
    },
    {
      product_id: 3,
      name: 'Chocolate Cake',
      price: 5,
      stock: -37,
      description: 'A piece of delicious chocolate cake',
    },
    {
      product_id: 4,
      name: 'Donut',
      price: 8,
      stock: -37,
      description: 'The best Donut in town',
    },
  ];
};

const getPackages = async (): Promise<?Array<PackageType>> => {
  try {
    const response = await api.get('products/api/packages/');
    console.log(response);
    if (response.status === 200) {
      return response.data.results.map(clubPackage => ({
        ...clubPackage,
        selected: false,
        image: require('../assets/image.png'),
        description: `${i18n.t('club.packageDescription.partOne')} ${
          clubPackage.quantity
        } ${i18n.t('club.packageDescription.partTwo')}`,
      }));
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

const clubSubscribe = async (
  packageId: number,
  creditCard: {},
): Promise<any> => {
  try {
    const response = await api.post(
      `products/api/packages/${packageId}/subscribe/`,
      creditCard,
    );
    if (response.status === 202) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

export default { selectMenu, getAll, getPackages, clubSubscribe };
