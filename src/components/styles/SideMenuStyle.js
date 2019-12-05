import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  userInfoContainer: {
    flexGrow: 2,
    backgroundColor: Colors.SECONDARY,
    justifyContent: 'space-between',
    paddingLeft: '8%',
    paddingTop: 10,
    paddingBottom: 20,
  },
  pressArea: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  userNameText: {
    fontWeight: 'bold',
    fontSize: Metrics.text.medium,
    color: Colors.PRIMARY,
  },
  userAddressText: {
    color: Colors.PRIMARY,
    fontSize: Metrics.text.regular,
  },
  navigationContainer: {
    flexGrow: 8,
    padding: '8%',
  },
});

export default styles;
