/**
 * @flow
 * @format
 */

import { createContext } from 'react';
import type {
  MenuType,
  ProductType,
  PackageType,
} from '../../services/Products';

// Types
export type UserType = {
  first_name: string,
  last_name: string,
  email: string,
  profile: {
    cpf: string,
    phone: string,
  },
  addresses: Array<AddressType>,
  cards: Array<PaymentType>,
  subscriptions: Array<ClubPackageType>,
};

type ClubPackageType = {
  id: number,
  actual_quantity: number,
  date_joined: string,
  package: PackageType,
};

export type AddressType = {
  name: string,
  street: string,
  district: string,
  cep: string,
  number: number,
  complement?: string,
  active: boolean,
};

export type PaymentType = {
  cardNumber: string,
  cvv: number,
  expirationDate: string,
  cardholder: string,
  cpf: string,
  cardFlag: string,
  active: boolean,
};

type OrderType = {
  infos: {
    type_of_order: string,
    table_code?: string | null,
  },
  credit_card?: PaymentType,
  address?: AddressType,
  products?: Array<ProductType>,
};

export type ProductOrderType = {
  product_id: number,
  product: {
    name: string,
    price: number,
    image?: string,
  },
  name: string,
  price: number,
  description: string,
  image?: string,
  quantity: number,
  extras: Array<any>,
  extra_orders: Array<any>,
};

export type ConfirmedOrderType = {
  type_of_order: string,
  table_code?: string,
  order_code: string,
  status: string,
  date_ordered: string,
  creditCard?: PaymentType,
  address?: AddressType,
  items: Array<ProductOrderType>,
};

export type State = {
  accessToken: string,
  user: UserType,
  currentAddress?: AddressType,
  currentMenu?: MenuType,
  currentOrder?: OrderType,
  orderHistory: Array<ConfirmedOrderType>,
  productToCustomize: any,
};

export type Action = {
  type: string,
  payload: any,
};

// Initial State
export const initialState: State = {
  accessToken: '',
  user: {
    first_name: '',
    last_name: '',
    email: '',
    profile: {
      phone: '',
      cpf: '',
    },
    addresses: [],
    cards: [],
    subscriptions: [],
  },
  orderHistory: [],
  currentMenu: {},
  productToCustomize: {
    name: 'Product Name',
    extras: [],
    product_id: 0,
  },
};

// Actions
export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    case 'LOGOUT_USER':
      return initialState;
    case 'UPDATE_USER':
      return {
        ...state,
        user: {
          ...action.payload,
          addresses: state.user.addresses,
        },
      };
    case 'ADDRESS_ADDED':
      return {
        ...state,
        user: {
          ...state.user,
          addresses: [...state.user.addresses, action.payload],
        },
      };
    case 'CARD_ADDED':
      return {
        ...state,
        user: {
          ...state.user,
          cards: [...state.user.cards, action.payload],
        },
      };
    case 'SELECTED_MENU':
      return {
        ...state,
        currentMenu: action.payload,
      };
    case 'CREATE_ORDER':
      return {
        ...state,
        currentOrder: {
          infos: {
            ...state?.currentOrder?.infos,
            type_of_order: action.payload.typeOfOrder,
          },
          products: action.payload.products,
        },
      };
    case 'SET_ORDER_TYPE':
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          infos: {
            ...state?.currentOrder?.infos,
            type_of_order: action.payload,
          },
        },
      };
    case 'SET_TABLE_CODE':
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          infos: {
            ...state?.currentOrder?.infos,
            table_code: action.payload,
          },
        },
      };
    case 'CONFIRM_ORDER':
      return {
        ...state,
        currentOrder: {
          infos: {
            type_of_order: '',
            table_code: null,
          },
          products: [],
        },
        orderHistory: [action.payload, ...state?.orderHistory],
      };
    case 'LOAD_HISTORY':
      return {
        ...state,
        orderHistory: [...action.payload],
      };
    case 'SET_CLUB_PACKAGES':
      return {
        ...state,
        clubPackages: action.payload,
      };
    case 'CREDIT_CARD_SELECTED':
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          credit_card: action.payload,
        },
      };
    case 'ADDRESS_SELECTED':
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          address: action.payload,
        },
      };
    case 'PACKAGE_SUBSCRIPTION':
      return {
        ...state,
        user: {
          ...state.user,
          subscriptions: [...state.user.subscriptions, action.payload],
        },
      };
    case 'SELECT_PRODUCT':
      return {
        ...state,
        productToCustomize: action.payload,
      };
    case 'UPDATE_EXTRAS':
      return {
        ...state,
        productToCustomize: {
          ...state.productToCustomize,
          extras: action.payload,
        },
      };
    default:
      return state;
  }
}

export default createContext<any>(initialState);
