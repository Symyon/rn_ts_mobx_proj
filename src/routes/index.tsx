import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import HomeScreen from '../screens/HomeScreen';

export enum ROUTES {
  RootLoading = 'RootLoading',
  RootAuth = 'RootAuth',
  RootApp = 'RootApp',
  Login = 'RootLogin',
  CreateAccount = 'RootCreateAccount',
  Home = 'RootHome',
}

const AuthStack = createStackNavigator({
  [ROUTES.Login]: {
    screen: LoginScreen,
  },
  [ROUTES.CreateAccount]: {
    screen: CreateAccountScreen,
  },
});

const AppStack = createStackNavigator({
  [ROUTES.Home]: {
    screen: HomeScreen,
  },
},
{
  initialRouteName: 'RootHome'
});

const RootSwitch = createSwitchNavigator(
  {
    [ROUTES.RootLoading]: AuthLoadingScreen,
    [ROUTES.RootApp]: AppStack,
    [ROUTES.RootAuth]: AuthStack,
  },
  {
    initialRouteName: 'RootLoading',
  },
);

const AppContainer = createAppContainer(RootSwitch);

export default AppContainer;
