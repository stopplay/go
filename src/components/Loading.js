/**
 * @flow
 * @format
 */

import React from 'react';
import { View, Modal, Animated, Image } from 'react-native';
import styles from './styles/LoadingStyle';

type Props = {
  loading: boolean,
};

const Loading = (props: Props) => {
  let animatedValue = new Animated.Value(1);

  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        duration: 700,
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        duration: 600,
        toValue: 1,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  return (
    <Modal visible={props.loading} transparent>
      <View style={styles.modal}>
        <Animated.View style={[styles.effectRow, { opacity: animatedValue }]}>
          <Image
            style={styles.image}
            source={require('../assets/go_logo.png')}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Loading;
