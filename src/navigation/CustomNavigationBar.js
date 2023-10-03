import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/scrLab1/HomeScreen";
import DetailsScreen from "../screens/scrLab1/DetailsScreen";
import ScreenTest from "../screens/scrLab1/ScreenTest";
import MenuBtn from "../components/MenuBtn";
import AppBarHeader from "../components/AppBarHeaderMenu";
import AppBarHeaderMenu from "../components/AppBarHeaderMenu";

const Stack = createStackNavigator();

const CustomNavigationBar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
          {
            header: (props)=> <AppBarHeaderMenu {...props} />,
            // headerTintColor: "white",
            // headerStyle: {backgroundColor:"tomato"},
            // headerTitleAlign: "center",  
          }
        }
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ScreenTest" component={ScreenTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CustomNavigationBar

const styles = StyleSheet.create({});
