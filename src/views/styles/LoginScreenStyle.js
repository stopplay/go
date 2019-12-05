import { StyleSheet, Dimensions } from 'react-native';
import generalScreenStyle from './GeneralScreenStyle';
import Colors from '../../theme/Colors';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  ...generalScreenStyle,
  content: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '5%',
  },
  inputLogin: {
    width: '100%',
    marginVertical: 10,
    color: Colors.WHITE,
    fontWeight: 'bold',
    backgroundColor: '#0000004D',
    borderRadius: 10,
    paddingHorizontal: '5%',
    borderWidth: 0.8,
    borderColor: Colors.WHITE,
  },
  registerTextColor: {
    color: Colors.PRIMARY,
  },
  registerContainer: {
    marginBottom: 20,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default styles;
