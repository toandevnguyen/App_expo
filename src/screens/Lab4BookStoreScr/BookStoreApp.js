import 'react-native-gesture-handler';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import { ActivityIndicator, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import DrawerNavigator from './src/components/cpnLab2/DrawerNavigator';
import BookDetail from './BookDetail';
import useAuth from '../../hooks/useAuth';
import Tabs from '../../navigation/Lab4BookStoreNaviga/tabs';
import LoginScreen from '../scrLab1/LoginScreen';
import SignUpScreen from '../scrLab1/SignUpScreen';
import WelcomeScreen from '../scrLab1/WelcomeScreen';
// import { FIRE_BASE_AUTH } from '../App_expo/src/firebase/firebaseConfig'; //getAuth

const NativeStack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};
const App = () => {
  const userLoginEmail = useAuth();
  console.log(' file: App.js:35 ~ App ~ userLoginEmail:', userLoginEmail.user);
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer theme={theme}>
          {userLoginEmail.user ? (
            <NativeStack.Navigator initialRouteName="HomeScreen">
              <NativeStack.Screen
                name="HomeScreen"
                component={Tabs}
                options={{
                  headerShown: false,
                }}
                // console.log("userLoginEmail"),
              />
              <NativeStack.Screen
                name="BookDetail"
                component={BookDetail}
                options={{ headerShown: false }}
              />
            </NativeStack.Navigator>
          ) : (
            <NativeStack.Navigator initialRouteName="WelcomeScreen">
              <NativeStack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <NativeStack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                // options={{ headerShown: false }}
              />
              <NativeStack.Screen
                name="LoginScreen"
                component={LoginScreen}
                // children={(props) => <LoginScreen {...props} promptAsync={promptAsync} />}

                // options={{ headerShown: false }}
              />
            </NativeStack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;

//Todo: để mai làm
//? tao làm gì?
//! cẩn thận mày
