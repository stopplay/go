import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
  inputText: {
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
