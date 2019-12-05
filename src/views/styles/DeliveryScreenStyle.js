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
    width: '100%',
  },
  infoContainer: {
    width: '100%',
    flexGrow: 1,
  },
  secondContainer: {
    marginTop: 20,
  },
  containerPaddingHorizontal: {
    paddingHorizontal: '5%',
  },
  footer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
});
export default styles;
