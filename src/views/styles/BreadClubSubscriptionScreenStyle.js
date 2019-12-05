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
    padding: 20,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  packageInfo: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'flex-start',
  },
  packageInfoText: {
    color: Colors.BLACK,
    fontSize: Metrics.text.medium,
  },
  rowWithSpace: {
    justifyContent: 'space-between',
  },
  form: {
    flexGrow: 6,
    width: '100%',
    paddingVertical: 20,
  },
  formGroupExp: {
    width: '60%',
  },
  formGroupCVV: {
    width: '38%',
  },
  agreeContainer: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  agreeTextContainer: {
    width: '90%',
    marginVertical: 20,
  },
  agreeText: {
    color: Colors.BLACK,
  },
});
export default styles;
