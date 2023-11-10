import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "./src/screens/scrLab1/LoginScreen";
import HomePage from "./src/screens/scrLab1/HomePage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/scrLab1/HomeScreen";
import DetailsScreen from "./src/screens/scrLab1/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import ScreenTest from "./src/screens/scrLab1/ScreenTest";
import AppBar from "./src/components/cpnLab1/AppBarLo";
import CustomNavigationBar from "./src/navigation/CustomNavigationBar";
import AppBarHeader from "./src/components/cpnLab1/AppBarHeaderMenu";
import MenuItem from "./src/components/cpnLab1/MenuItem";
import MenuBtn from "./src/components/cpnLab1/MenuBtn";
import { PaperProvider } from "react-native-paper";
import ContactsScreen from "./src/screens/scrLab2/ContactsScreen";
import ProfileScreen from "./src/screens/scrLab2/ProfileScreen";
import CustomNavigationBar_Lab2 from "./src/navigation/CustomNavigationBar_Lab2";
import DrawerBar from "./src/components/cpnLab1/DrawerBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreenStack from "./src/screens/scrLab2/FavoritesScreen";
import UserScreenStack from "./src/screens/scrLab2/UserScreen";
import AppBarHeaderMenu_Lab2 from "./src/components/cpnLab2/AppBarHeaderMenu_Lab2";
import ContactsScreenStack from "./src/screens/scrLab2/ContactsScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DrawerNavigator from "./src/components/cpnLab2/DrawerNavigator";
import SignUpScreen from "./src/screens/scrLab1/SignUpScreen";
import WelcomeScreen from "./src/screens/scrLab1/WelcomeScreen";
import Icon from "react-native-vector-icons/MaterialIcons";

import useAuth from "./src/hooks/useAuth";//hook onAuthStateChanged

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
  // }
  // else {
  //   return (
  //     <SafeAreaProvider>
  //       <PaperProvider>
  //         <NavigationContainer>
  //           <NativeStack.Navigator initialRouteName="WelcomeScreen">
  //             <NativeStack.Screen
  //               name="SignUpScreen"
  //               component={SignUpScreen}
  //               // options={{ headerShown: false }}
  //             />
  //             <NativeStack.Screen
  //               name="LoginScreen"
  //               component={LoginScreen}
  //               // options={{ headerShown: false }}
  //             />
  //             <NativeStack.Screen
  //               name="WelcomeScreen"
  //               component={WelcomeScreen}
  //               options={{ headerShown: false }}
  //             />
  //           </NativeStack.Navigator>
  //         </NavigationContainer>
  //       </PaperProvider>
  //     </SafeAreaProvider>
  //   );
  // }
};

export default App;
