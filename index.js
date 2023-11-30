/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';

import { registerRootComponent } from 'expo';

import App from './App';
import DrawerNavigator from './src/components/cpnLab2/DrawerNavigator';
import CustomNavigationBar from './src/navigation/CustomNavigationBar';
import CustomNavigationBar_Lab2 from './src/navigation/CustomNavigationBar_Lab2';
import KamiSpaApp from './src/screens/GiuaKyKamiSpaScr/KamiSpaApp';
import LoginScreen from './src/screens/GiuaKyKamiSpaScr/LoginScreen';
import BookStoreApp from './src/screens/Lab4BookStoreScr/BookStoreApp';
import Todos from './src/screens/TodosAppScr/Todos';
import HomeScreen from './src/screens/scrLab1/HomeScreen';
import WelcomeScreen from './src/screens/scrLab1/WelcomeScreen';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(BookStoreApp);
