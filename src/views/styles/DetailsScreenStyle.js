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
  tableInfoContainer: {
    width: '100%',
    padding: '5%',
    alignItems: 'flex-start',
  },
  tableInfoText: {
    fontSize: Metrics.text.regular,
  },
  cancelButtonText: {
    color: Colors.RED,
  },
  cancelButtonContainer: {
    alignItems: 'center',
  },
});
export default styles;
