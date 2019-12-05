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
    paddingVertical: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  flatListContainer: {
    width: '100%',
  },
});
export default styles;
