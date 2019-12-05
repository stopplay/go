import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 80,
    resizeMode: 'stretch',
  },
  effectRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default styles;
