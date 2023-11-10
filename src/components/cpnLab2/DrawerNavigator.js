import { createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialBottomTabNavigator from './MaterialBottomTabNavigator';
import FavoritesScreenStack from '../../screens/scrLab2/FavoritesScreen';
import UserScreenStack from '../../screens/scrLab2/UserScreen';
import { Drawer } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons";


export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
        <Drawer.Screen

            name='BottomTabDrawer'
            component={MaterialBottomTabNavigator}
            options={{ 
              drawerLabel: 'BottomTab', 
              drawerIcon:()=>(
                    <Icon 
                      name="home" 
                      size={24}
                      color="blue"
                    />
                  )
              }}
        />
         <Drawer.Screen
            name='Favorites Drawer' 
            component={FavoritesScreenStack}
            options={{ 
              drawerLabel: 'Favorites', 
              drawerIcon:()=>(
                <Icon 
                  name='favorite'
                  color="red"
                  size={24}
                />
              )
            }}
        />
         <Drawer.Screen
            name='UserDrawer'
            component={UserScreenStack}
            options={{ 
              drawerLabel: 'User', 
              drawerIcon:()=>(
                <Icon
                  name='person'
                  color="rgb(254, 184, 7)"
                  size={24}
                />
              )
            }}
        />
            
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})