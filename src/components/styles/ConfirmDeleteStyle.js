import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    height: 250,
    width: '90%',
    padding: 20,
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
    fontSize: Metrics.text.medium,
    textAlign: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'flex-end',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: 0.8,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  buttonContainerSolid: {
    backgroundColor: Colors.PRIMARY,
  },
  buttonTextSolid: {
    color: Colors.WHITE,
  },
});

export default styles;
