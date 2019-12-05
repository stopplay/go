import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
    flexGrow: 1,
    height: 80,
    margin: 10,
    padding: 20,
    borderRadius: 5,
  },
  text: {
    color: Colors.WHITE,
    fontSize: Metrics.text.medium,
  },
});

export default styles;
