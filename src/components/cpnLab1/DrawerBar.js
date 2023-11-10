import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/scrLab1/HomeScreen";
import DetailsScreen from "../../screens/scrLab1/DetailsScreen";

const Drawer = createDrawerNavigator();

export default function DrawerBar() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
