import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  text: {
    color: Colors.BLACK,
    fontSize: Metrics.text.regular,
  },
  radioContainer: {
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    padding: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    width: 12,
    height: 12,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
  },
});

export default styles;
