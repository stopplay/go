import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.LIGHTPRIMARY,
    borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pressArea: {
    height: 50,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.LIGHTBLACK,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: Metrics.text.medium,
    color: Colors.BLACK,
  },
  price: {
    fontSize: Metrics.text.regular,
  },
  description: {
    fontSize: Metrics.text.small,
  },
  infoContainer: {
    flex: 7,
  },
  logicContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
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
  customProductButton: {
    height: 25,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  customProductText: {
    fontWeight: 'bold',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default styles;
