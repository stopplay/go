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

export const formatDateTime = (date: string): string => {
  const dateTimeArray = date.toString().split('T');
  const dateSplited = dateTimeArray[0].split('-');
  const dateFormated = `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;
  const timeFromDate = dateTimeArray[1].split('.')[0];
  return `${dateFormated} - ${timeFromDate}`;
};
