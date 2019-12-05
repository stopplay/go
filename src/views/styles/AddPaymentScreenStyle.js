import { StyleSheet } from 'react-native';
import generalScreenStyle from './GeneralScreenStyle';
import { Metrics } from '../../theme';

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
    padding: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  cardsContainer: {
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  checkBoxContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  checkBoxText: {
    fontSize: Metrics.text.small,
  },
  scrollContainer: {
    width: '100%',
  },
  formGroup: {
    justifyContent: 'space-between',
    width: '100%',
  },
  formGroupSmaller: {
    width: '40%',
  },
  formGroupBigger: {
    width: '57%',
  },
  formElement: {
    width: '100%',
  },
});
export default styles;
