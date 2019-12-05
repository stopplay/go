/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Modal, Text } from 'react-native';
import styles from './styles/ConfirmSubscribeStyle';
import i18n from '../i18n/i18n';
import Button from './Button';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

type Props = {
  visible: boolean,
  onPress: Function,
};

const ConfirmSubscribe = (props: Props) => {
  return (
    <Modal visible={props.visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Icon name="check-circle" size={60} color="black" />
          <Text style={styles.text}>{i18n.t('club.sub.success')}</Text>
          <Button value="ok" onPress={props.onPress} />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmSubscribe;
