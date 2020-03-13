/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import styles from './styles/ConfirmDeleteStyle';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

type Props = {
  message: string,
  visible: boolean,
  onPress: Function,
  onRequestClose: Function,
  buttonsValue: {
    cancel: string,
    confirm: string,
  },
};

const ConfirmDelete = (props: Props) => {
  return (
    <Modal
      visible={props.visible}
      transparent
      animationType="slide"
      onRequestClose={props.onRequestClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <TouchableOpacity onPress={props.onRequestClose}>
              <Icon name="close" size={30} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>{props.message}</Text>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={props.onRequestClose}>
              <Text style={styles.buttonText}>{props.buttonsValue.cancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.buttonContainerSolid]}
              onPress={props.onPress}>
              <Text style={[styles.buttonText, styles.buttonTextSolid]}>
                {props.buttonsValue.confirm}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDelete;
