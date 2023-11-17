/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';

import { registerRootComponent } from 'expo';

import App from './App';
import DrawerNavigator from './src/components/cpnLab2/DrawerNavigator';
import CustomNavigationBar from './src/navigation/CustomNavigationBar';
import CustomNavigationBar_Lab2 from './src/navigation/CustomNavigationBar_Lab2';
import HomeScreen from './src/screens/scrLab1/HomeScreen';
import WelcomeScreen from './src/screens/scrLab1/WelcomeScreen';
import test from './src/screens/test';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
