import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const generalScreenStyle = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: Colors.BLACK,
  },
  logo: {
    width: 120,
    height: 90,
    resizeMode: 'cover',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  selectMenuContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  registerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  splashContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    width: '100%',
    minHeight: '100%',
  },
  paddingContainer: {
    padding: '5%',
    justifyContent: 'center',
  },
  fullContainer: {
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  refreshRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default generalScreenStyle;
