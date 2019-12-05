import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    height: 250,
    width: '90%',
    padding: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  modalContainer: {
    backgroundColor: '#323232AE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
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
