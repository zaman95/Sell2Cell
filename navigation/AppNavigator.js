
import { Text, Animated, Easing, } from 'react-native'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import LoginScreen from '../Screens/login/LoginScreen'
import SignupScreen from '../Screens/login/SignupScreen'
import ForgetPasswordScreen from '../Screens/login/ForgetPasswordScreen'
import UpdateForgetPassword from '../Screens/login/UpdateForgetPassword'
import WelcomeScreen from '../Screens/login/WelcomeScreen';
import CreateProfileScreen from '../Screens/login/CreateProfileScreen';
import TabNavigator from './BottomTabs';
import MainApp from '../Screens/MainApp';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const DashBoard = createStackNavigator({
  tabNavigator: { screen: TabNavigator },
}, {
   headerMode: 'none',
   initialRouteName: 'tabNavigator',
})



// login stack
const LoginStack = createStackNavigator({
  welcomeScreen: { screen: WelcomeScreen },
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgetPasswordScreen: { screen: ForgetPasswordScreen },
  updateForgetPassword: { screen: UpdateForgetPassword },
  createProfileScreen: { screen: CreateProfileScreen },
}, {
  headerMode: 'none',
  initialRouteName: 'signupScreen',
})



export default AppNavigator  = createSwitchNavigator(
  {
    AuthLoading: MainApp,
    App: DashBoard,
    Auth: LoginStack,
  },
  {
    initialRouteName: 'AuthLoading',
    transitionConfig: noTransitionConfig,
  }
);