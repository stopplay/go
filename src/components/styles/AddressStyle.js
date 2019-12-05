import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 0.7,
    borderRadius: 5,
    borderColor: Colors.SUPERLIGHTPRIMARY,
    marginVertical: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: Colors.SUPERLIGHTPRIMARY,
  },
});

export default styles;
