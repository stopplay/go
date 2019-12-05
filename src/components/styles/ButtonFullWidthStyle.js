import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    color: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.PRIMARY,
    height: 56,
  },
  disabled: {
    backgroundColor: Colors.LIGHTPRIMARY,
  },
  btnText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});

export default styles;
