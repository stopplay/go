import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.LIGHTPRIMARY,
    paddingVertical: 10,
    paddingHorizontal: '5%',
  },
  textColor: {
    color: Colors.BLACK,
  },
  button: {
    fontSize: Metrics.text.small,
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default styles;
