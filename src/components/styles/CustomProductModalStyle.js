import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: '100%',
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  header: {
    width: '100%',
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    flex: 7.5,
    width: '100%',
    paddingVertical: '5%',
    alignItems: 'flex-start',
  },
  footer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '90%',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: Metrics.text.big,
  },
  infoContainer: {
    marginBottom: '5%',
  },
  category: {
    width: '100%',
    marginVertical: '2%',
  },
  categoryHeader: {
    backgroundColor: Colors.LIGHTPRIMARY,
    paddingVertical: 10,
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: Metrics.text.medium,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  change: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  cashInput: {
    width: 100,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 30,
  },
  button: {
    width: 120,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  confirmButton: {
    backgroundColor: Colors.PRIMARY,
  },
  buttonText: {
    color: Colors.WHITE,
  },

  modalContainer: {
    backgroundColor: Colors.SHADOW_GREY,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontSize: Metrics.text.regular,
  },
  bold: {
    fontWeight: 'bold',
  },
  codeText: {
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontWeight: 'bold',
    fontSize: Metrics.text.medium,
  },
  quantityContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 26,
  },
  quantityPressAreaButton: {
    width: 50,
    height: 40,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
