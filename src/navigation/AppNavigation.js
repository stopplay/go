import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import SideMenu from '../components/SideMenu';
// Splash Screen
import SplashScreen from '../views/SplashScreen';
// Drawer Stack
import UserDetailsScreen from '../views/UserDetailsScreen';
import AddressScreen from '../views/AddressScreen';
import PaymentsScreen from '../views/PaymentsScreen';
// History Stack
import HistoryScreen from '../views/HistoryScreen';
import DetailsScreen from '../views/DetailsScreen';
// Auth Stack
import SelectLoginScreen from '../views/SelectLoginScreen';
import LoginScreen from '../views/LoginScreen';
import RegisterScreen from '../views/RegisterScreen';
// Menu Stack
import SelectMenuScreen from '../views/SelectMenuScreen';
// Order Stack
import OrderScreen from '../views/OrderScreen';
import TableCodeScreen from '../views/TableCodeScreen';
import DeliveryScreen from '../views/DeliveryScreen';
import AddAddressScreen from '../views/AddAddressScreen';
import AddPaymentScreen from '../views/AddPaymentScreen';
import CollectOrderScreen from '../views/CollectOrderScreen';
import CheckoutScreen from '../views/CheckoutScreen';
// Club Stack
import BreadClubScreen from '../views/BreadClubScreen';
import BreadClubSubscriptionScreen from '../views/BreadClubSubscriptionScreen';

const AuthStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    SelectLoginScreen: { screen: SelectLoginScreen },
    RegisterScreen: { screen: RegisterScreen },
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const ClubStack = createStackNavigator(
  {
    BreadClubScreen: BreadClubScreen,
    BreadClubSubscriptionScreen: BreadClubSubscriptionScreen,
  },
  { initialRouteName: 'BreadClubScreen', headerMode: 'none' },
);

const MenuStack = createStackNavigator(
  {
    SelectMenuScreen: { screen: SelectMenuScreen },
  },
  { initialRouteName: 'SelectMenuScreen', headerMode: 'none' },
);

const HistoryStack = createStackNavigator(
  {
    HistoryScreen: { screen: HistoryScreen },
    DetailsScreen: { screen: DetailsScreen },
  },
  { initialRouteName: 'HistoryScreen', headerMode: 'none' },
);

const OrderStack = createStackNavigator(
  {
    OrderScreen: { screen: OrderScreen },
    TableCodeScreen: { screen: TableCodeScreen },
    DeliveryScreen: { screen: DeliveryScreen },
    CollectOrderScreen: { screen: CollectOrderScreen },
    CheckoutScreen: { screen: CheckoutScreen },
  },
  { initialRouteName: 'OrderScreen', headerMode: 'none' },
);

const AddressStack = createStackNavigator(
  {
    AddressScreen: { screen: AddressScreen },
    AddAddressScreen: { screen: AddAddressScreen },
  },
  { headerMode: 'none' },
);

const PaymentStack = createStackNavigator(
  {
    PaymentsScreen: { screen: PaymentsScreen },
    AddPaymentScreen: { screen: AddPaymentScreen },
  },
  { headerMode: 'none' },
);

const { width } = Dimensions.get('window');
const DrawerConfig = {
  drawerWidth: width * 0.85,
  drawerType: 'front',
  contentComponent: ({ navigation }) => <SideMenu navigation={navigation} />,
};

const AppStack = createDrawerNavigator(
  {
    OrderStack: OrderStack,
    ClubStack: ClubStack,
    AddressStack: AddressStack,
    PaymentStack: PaymentStack,
    HistoryStack: HistoryStack,
    UserDetailsScreen: { screen: UserDetailsScreen },
  },
  DrawerConfig,
);

export default createAppContainer(
  createSwitchNavigator(
    {
      SplashStack: createStackNavigator(
        {
          SplashScreen: { screen: SplashScreen },
        },
        {
          headerMode: 'none',
        },
      ),
      AuthStack: AuthStack,
      AppStack: AppStack,
      MenuStack: MenuStack,
    },
    { initialRouteName: 'SplashStack' },
  ),
);
