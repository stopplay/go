/**
 * @format
 * @flow
 */

import React, { useEffect, useContext } from 'react';
import { View, Animated, Easing } from 'react-native';
import styles from './styles/GeneralScreenStyle';
import { getUser, setUser } from '../utils/helpers';
// Context
import Context from '../utils/context/Context';
// Services
import User from '../services/User';

type Props = {
  navigation: any,
};

const SplashScreen = (props: Props) => {
  let animatedOpacityvalue = new Animated.Value(0);
  const { dispatch } = useContext(Context);

  useEffect(() => {
    (async () => {
      try {
        const userToken = await getUser();
        let data = null;
        if (userToken) {
          await setUser(userToken);
          data = await User.getProfile();
        }
        Animated.timing(animatedOpacityvalue, {
          duration: 1000,
          toValue: 1,
          useNativeDriver: true,
          easing: Easing.bezier(0.49, 0.01, 1, 0.7),
        }).start(() => {
          if (data) {
            dispatch({
              type: 'LOGIN_USER',
              payload: {
                user: data.user,
                accessToken: data.token,
              },
            });
            return props.navigation.navigate('SelectMenuScreen');
          }
          return props.navigation.navigate('LoginScreen');
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Animated.Image
        source={require('../assets/go_logo.png')}
        style={[styles.logo, { opacity: animatedOpacityvalue }]}
      />
    </View>
  );
};

export default SplashScreen;
