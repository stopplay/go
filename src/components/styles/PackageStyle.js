import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.LIGHTPRIMARY,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
  },
  selected: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.PRIMARY,
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
    flex: 8,
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default styles;
