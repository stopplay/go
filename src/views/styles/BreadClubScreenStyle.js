import { StyleSheet } from 'react-native';
import generalScreenStyle from './GeneralScreenStyle';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  ...generalScreenStyle,
  header: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  body: {
    flex: 8,
  },
  footer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  textDescription: {
    color: Colors.BLACK,
    paddingHorizontal: 20,
    marginVertical: 20,
    fontSize: Metrics.text.regular,
  },
  packageList: {},
});
export default styles;
