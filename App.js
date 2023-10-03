import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "./src/screens/scrLab1/Login";
import HomePage from "./src/screens/scrLab1/HomePage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/scrLab1/HomeScreen";
import DetailsScreen from "./src/screens/scrLab1/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import ScreenTest from "./src/screens/scrLab1/ScreenTest";
import AppBar from "./src/components/AppBarLo";
import CustomNavigationBar from "./src/navigation/CustomNavigationBar";
import AppBarHeader from "./src/components/AppBarHeaderMenu";
import MenuItem from "./src/components/MenuItem";
import MenuBtn from "./src/components/MenuBtn";
import { PaperProvider } from "react-native-paper";
import ContactsScreen from "./src/screens/scrLab2/ContactsScreen";
import ProfileScreen from "./src/screens/scrLab2/ProfileScreen";
import CustomNavigationBar_Lab2 from "./src/navigation/CustomNavigationBar_Lab2";
import DrawerBar from "./src/components/DrawerBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreenStack from "./src/screens/scrLab2/FavoritesScreen";
import UserScreenStack from "./src/screens/scrLab2/UserScreen";
import AppBarHeaderMenu_Lab2 from "./src/components/cpnLab2/AppBarHeaderMenu_Lab2";
import ContactsScreenStack from "./src/screens/scrLab2/ContactsScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// import filestore from "@react-native-firebase/firestore";

const Stack = createMaterialBottomTabNavigator(); //bottom tab navigation
const App = () => {
  // filestore();
  const getTabBarIcon =
    (icon) =>
    ({ tintColor }) =>
      <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />;
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Contacts"
            screenOptions={{
              header: (props) => <AppBarHeaderMenu_Lab2 {...props} />,
              headerTintColor: "white",
              headerStyle: { backgroundColor: "tomato" },
              headerTitleAlign: "left",
              headerShown: false, //ẩn header của bottom tag
            }}
          >
            <Stack.Screen
              name="Contacts"
              component={ContactsScreenStack}
              options={{
                tabBarIcon: getTabBarIcon("list"),
              }}
            />
            <Stack.Screen
              name="Favorites"
              component={FavoritesScreenStack}
              options={{
                tabBarIcon: getTabBarIcon("star"),
              }}
            />
            <Stack.Screen
              name="User"
              component={UserScreenStack}
              options={{
                tabBarIcon: getTabBarIcon("person"),
              }}
            />
            {/* <Stack.Screen name="ScreenTest" component={ScreenTest} /> */}
          </Stack.Navigator>
        </NavigationContainer>
        {/* <ProfileScreen /> */}
        {/* <ContactsScreen /> */}
        {/* <CustomNavigationBar_Lab2 /> */}
        {/* <DrawerBar /> */}
        {/* <CustomNavigationBar/> */}
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
