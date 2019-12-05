import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
  },
  text: {
    color: Colors.WHITE,
    fontSize: Metrics.text.regular,
    fontWeight: 'bold',
    marginLeft: 26,
  },
});

export default styles;
