import { StyleSheet } from 'react-native';
import generalScreenStyle from './GeneralScreenStyle';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
  ...generalScreenStyle,
  form: {
    height: '90%',
    width: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  text: {
    textAlign: 'center',
    margin: 20,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 15,
    marginBottom: 80,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    marginRight: 5,
  },
  progressContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressSeparator: {
    marginHorizontal: 5,
    borderWidth: 1,
    height: 1,
    width: 30,
    borderColor: 'grey',
  },
  doneSeparator: {
    borderColor: Colors.PRIMARY,
  },
});

export default styles;
