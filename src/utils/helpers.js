/**
 * @flow
 * @format
 */
import AsyncStorage from '@react-native-community/async-storage';
import i18n from '../i18n/i18n';

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

export const translatedStatusOrder = (status: string): string => {
  const statusOfOrder = {
    afazer: 'details.orderStatus.toDo',
    fazendo: 'details.orderStatus.doing',
    feito: 'details.orderStatus.done',
    depot: 'details.orderStatus.depot',
    completed: 'details.orderStatus.completed',
    canceled: 'details.orderStatus.canceled',
    canceledandrefunded: 'details.orderStatus.canceledAndRefunded',
  };

  return i18n.t(
    statusOfOrder[
      status
        .toLowerCase()
        .split(' ')
        .join('')
    ],
  );
};
