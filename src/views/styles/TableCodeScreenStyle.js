import { StyleSheet } from 'react-native';
import generalScreenStyle from './GeneralScreenStyle';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  ...generalScreenStyle,
  title: {
    color: Colors.BLACK,
    fontSize: Metrics.text.medium,
    marginVertical: 30,
  },
  buttonsContainer: {
    width: '100%',
    height: '75%',
  },
});
export default styles;
