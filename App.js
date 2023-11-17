import 'react-native-gesture-handler';
// import 'expo-dev-client';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DrawerNavigator from './src/components/cpnLab2/DrawerNavigator';
import useAuth from './src/hooks/useAuth'; //hook onAuthStateChanged
import LoginScreen from './src/screens/scrLab1/LoginScreen';
import SignUpScreen from './src/screens/scrLab1/SignUpScreen';
import WelcomeScreen from './src/screens/scrLab1/WelcomeScreen';
// import firestore from '@react-native-firebase/firestore';
const NativeStack = createNativeStackNavigator();

const App = () => {
  // const BottomTab = createMaterialBottomTabNavigator(); //bottom tab navigation
  const { user } = useAuth();
  // if (user) {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          {user ? (
            <NativeStack.Navigator initialRouteName="HomeScreen">
              <NativeStack.Screen
                name="HomeScreen"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
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
