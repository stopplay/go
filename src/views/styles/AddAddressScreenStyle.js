import { StyleSheet } from 'react-native';
import generalScreenStyle from './GeneralScreenStyle';
import { Metrics, Colors } from '../../theme';

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
  cpfInput: {
    width: '80%',
  },
  cpfVerifyButton: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    textAlign: 'left',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    height: 50,
    color: Colors.BLACK,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 40,
  },
});
export default styles;
