import { StyleSheet } from 'react-native';
import generalScreenStyle from './GeneralScreenStyle';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  ...generalScreenStyle,
  title: {
    color: Colors.LIGHTBLACK,
    fontSize: Metrics.text.medium,
    marginBottom: 20,
  },
});

export default styles;
