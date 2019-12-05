import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: Colors.LIGHTPRIMARY,
    borderBottomWidth: 1,
  },
  title: {
    color: Colors.PRIMARY,
    marginLeft: 15,
    fontSize: Metrics.text.medium,
  },
});

export default styles;
