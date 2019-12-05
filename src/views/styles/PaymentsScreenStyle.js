import { StyleSheet } from 'react-native';
import generalScreenStyle from './GeneralScreenStyle';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  ...generalScreenStyle,
  paymentContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: Colors.SUPERLIGHTPRIMARY,
    marginVertical: 5,
  },
  header: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
  },
  body: {
    flex: 8,
    width: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'flex-start',
  },
  footer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
});
export default styles;
