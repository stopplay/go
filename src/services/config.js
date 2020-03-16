/**
 * @format
 */

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'https://mposgo.stopplay.io/',
  timeout: 5000,
});

api.interceptors.request.use(async req => {
  try {
    const token = await AsyncStorage.getItem('jwtToken');
    if (token) {
      if (req.headers) {
        req.headers.Authorization = `Bearer ${token}`;
      }
    }
    return req;
  } catch (error) {}
});

export const authApi = axios.create({
  baseURL: 'https://mposgo.stopplay.io/users/api/',
  timeout: 5000,
});

export default api;
