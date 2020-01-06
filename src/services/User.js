/**
 * @flow
 * @format
 */
import type {
  UserType,
  AddressType,
  PaymentType,
} from '../utils/context/Context';
import api, { authApi } from './config';
import i18n from '../i18n/i18n';
export type AuthType = {
  token: string,
  user: UserType,
};

export type ProfileType = {
  first_name: string,
  last_name: string,
  email: string,
  username?: string,
  password?: string,
  profile: {
    cpf: string,
    phone_number: string,
  },
};

type Credentials = {
  email: string,
  password: string,
};

const login = async (credentials: Credentials): Promise<?AuthType> => {
  try {
    const response = await authApi.post('login/', credentials);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 401) {
      const message = Object.values(error.response.data)[0];
      throw { message };
    }
    if (error.response.status === 400) {
      throw { message: error.response.data.non_field_errors[0] };
    }
  }
};

const getProfile = async (): Promise<?AuthType> => {
  try {
    const response = await api.get('users/api/clients/me/');
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    console.log(error.response);
  }
};

const updateProfile = async (userInfo: ProfileType) => {
  try {
    console.log(userInfo);
    const response = await api.patch('users/api/clients/me/', userInfo);
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

const register = async (newUser: ProfileType): Promise<?AuthType> => {
  try {
    const response = await authApi.post('clients/', newUser);
    if (response.status === 201) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error.response);
    console.log(error.response.data);
    if (error.response.data.email) {
      throw { message: error.response.data.email[0] };
    }
    throw { message: error.response.data.username[0] };
  }
};

const getAddresses = async (): Promise<any> => {
  try {
    const response = await api.get('users/api/address/');
    console.log(response);
    if (response.status === 200) {
      return response.data.results;
    }
    return [];
  } catch (error) {
    console.log(error.response);
  }
};

const addAddress = async (newAddress: AddressType): Promise<?AddressType> => {
  try {
    const response = await api.post('users/api/address/', newAddress);
    if (response.status === 201) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error.response);
  }
};

const addCreditCard = async (newCard: PaymentType): Promise<?PaymentType> => {
  try {
    const response = await api.post('payment/api/credit_card/', newCard);
    if (response.status === 201) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error.response);
  }
};

const validateCEP = async (cep: string): any => {
  try {
    const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) {
      throw 'invalid';
    }
    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    if (error === 'invalid') {
      throw { message: i18n.t('addAddress.errors.cepValidation.invalid') };
    }
    throw { message: i18n.t('addAddress.errors.cepValidation.formatError') };
  }
};

export default {
  register,
  login,
  updateProfile,
  getProfile,
  getAddresses,
  addAddress,
  addCreditCard,
  validateCEP,
};
