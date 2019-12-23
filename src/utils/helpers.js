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

export const formatDateTime = (date: Date): string => {
  const dateArray = date.toLocaleDateString().split('/');
  return `${dateArray[1].padStart(2, '0')}/${dateArray[0].padStart(2, '0')}/${
    dateArray[2]
  } - ${date.toLocaleTimeString().toString()}`;
};
