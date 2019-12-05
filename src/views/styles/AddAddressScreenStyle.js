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
  form: {
    flex: 8,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 5,
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
  footer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  checkBoxContainer: {
    marginVertical: 20,
    width: '100%',
    justifyContent: 'flex-start',
  },
  checkBoxText: {
    fontSize: Metrics.text.small,
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
});
export default styles;
