import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "./src/screens/Login";
import Pj7TextInput from "./src/screens/HomeScreen";
import HomePage from "./src/screens/HomePage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import ScreenTest from "./src/screens/ScreenTest";
import AppBar from "./src/components_rn_paper/AppBarLo";
import CustomNavigationBar from "./src/navigation/CustomNavigationBar";
import AppBarHeader from "./src/components_rn_paper/AppBarHeaderMenu";
import MenuItem from "./src/components_rn_paper/MenuItem";
import MenuBtn from "./src/components_rn_paper/MenuBtn";
import { PaperProvider } from "react-native-paper";
import ContactsScreen from "./src/screens/ContactsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CustomNavigationBar_Lab2 from "./src/navigation/CustomNavigationBar_Lab2";

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        {/* <ProfileScreen /> */}
        {/* <ContactsScreen /> */}
        <CustomNavigationBar_Lab2 />

        {/* <CustomNavigationBar_Lab2 /> */}
        {/* <HomePage/> */}
      </PaperProvider>
    </SafeAreaProvider>

    //   {/* <MenuBtn/> */}
    //   {/* <MenuItem/> */}
    //   {/* <AppBarHeader /> */}

    //   {/* <HomeScreen/> */}
    //   {/* <Login/> */}
    //   {/* <HomePage /> */}
    //   {/* <Pj7TextInput/> */}

    //<Login />
  );
};

export default App;

//const styles = StyleSheet.create({});
