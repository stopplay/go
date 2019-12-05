import { StyleSheet } from 'react-native';
import generalScreenStyle from './GeneralScreenStyle';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  ...generalScreenStyle,
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  header: {
    flex: 2.5,
    width: '100%',
    justifyContent: 'flex-start',
  },
  body: {
    flex: 6.5,
  },
  footer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  tabSelector: {
    height: 5,
    width: '100%',
    backgroundColor: Colors.LIGHTPRIMARY,
  },
  tabText: {
    color: Colors.PRIMARY,
    fontSize: Metrics.text.regular,
  },
  tabSelected: {
    width: '50%',
    backgroundColor: Colors.PRIMARY,
    height: 5,
    position: 'relative',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  infoText: {
    color: Colors.WHITE,
    fontSize: Metrics.text.small,
  },
});

export default styles;
