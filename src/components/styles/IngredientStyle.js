import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.PRIMARY,
    borderBottomWidth: 0.8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: Metrics.text.regular,
  },
  price: {
    fontSize: Metrics.text.small,
  },
  pressArea: {
    height: 50,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countNumber: {
    fontWeight: 'bold',
    color: Colors.BLACK,
    fontSize: Metrics.text.medium,
    marginHorizontal: 10,
  },
});

export default styles;
