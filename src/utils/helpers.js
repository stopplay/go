/**
 * @flow
 * @format
 */
import AsyncStorage from '@react-native-community/async-storage';

export const setUser = (jwtToken: string): void => {
  AsyncStorage.setItem('jwtToken', jwtToken);
};

export const getUser = async (): Promise<string> => {
  return await AsyncStorage.getItem('jwtToken');
};
