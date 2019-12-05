import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 20,
    height: 48,
    borderRadius: 40,
    borderWidth: 1,
  },
  btnText: {
    fontWeight: 'bold',
  },
  solid: {
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY,
  },
  solidText: {
    color: Colors.WHITE,
  },
  outline: {
    color: Colors.PRIMARY,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PRIMARY,
    borderRadius: 10,
    height: 40,
  },
  outlineText: {
    color: Colors.PRIMARY,
  },
});

export default styles;
