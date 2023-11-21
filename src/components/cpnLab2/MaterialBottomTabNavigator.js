import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ContactsScreenStack from '../../screens/scrLab2/ContactsScreen';
import FavoritesScreenStack from '../../screens/scrLab2/FavoritesScreen';
import UserScreenStack from '../../screens/scrLab2/UserScreen';
import UserScreenStack_copy from '../../screens/scrLab2/UserScreen_copy';

export default function MaterialBottomTabNavigator() {
  const getTabBarIcon =
    (icon) =>
    ({ tintColor }) => <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />;
  const BottomTab = createMaterialBottomTabNavigator();
  return (
    <BottomTab.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        // header: (props) => <AppBarHeaderMenu_Lab2 {...props} />
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerTitleAlign: 'left',
        headerShown: false, //ẩn header của bottom tag
      }}>
      <BottomTab.Screen
        name="Contacts"
        component={ContactsScreenStack}
        options={{
          tabBarIcon: getTabBarIcon('list'),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreenStack}
        options={{
          tabBarIcon: getTabBarIcon('star'),
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserScreenStack_copy}
        options={{
          tabBarIcon: getTabBarIcon('person'),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({});
