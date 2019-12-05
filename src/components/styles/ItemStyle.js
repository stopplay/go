import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: '5%',
    borderBottomColor: Colors.LIGHTPRIMARY,
    borderBottomWidth: 0.8,
  },
  textColor: {
    color: Colors.BLACK,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textInfo: {
    fontSize: Metrics.text.small,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
});

export default styles;
