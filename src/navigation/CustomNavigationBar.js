import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ScreenTest from "../screens/ScreenTest";
import MenuBtn from "../components_rn_paper/MenuBtn";
import AppBarHeader from "../components_rn_paper/AppBarHeaderMenu";
import AppBarHeaderMenu from "../components_rn_paper/AppBarHeaderMenu";

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
