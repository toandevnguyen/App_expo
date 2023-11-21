import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

import ProfileScreen from './ProfileScreen';
import UserScreenStack from './UserScreen';
import ContactThumbnail from '../../components/cpnLab2/ContactThumbnail';
import { fetchContacts } from '../../utility/api';
import colors from '../../utility/colors';

const FavoriteStack = createNativeStackNavigator();
export default function FavoritesScreenStack() {
  return (
    <FavoriteStack.Navigator
      initialRouteName="FavoritesScreen"
      screenOptions={
        {
          // headerShown: false, //ẩn header của bottom tag
        }
      }>
      <FavoriteStack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <FavoriteStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => {
          const { contact } = route.params;
          const { name } = contact;
          return {
            title: name.split(' ')[0],
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colors.blue,
            },
          };
        }}
      />
      {/* <FavoriteStack.Screen name="User" component={UserScreenStack} /> */}
    </FavoriteStack.Navigator>
  );
}

const keyExtractor = ({ phone }) => phone;
const FavoritesScreen = ({ navigation }) => {
  const [contacts, setContacts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  //Load du lieu
  React.useEffect(() => {
    fetchContacts()
      .then((contacts) => {
        setContacts(contacts);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  const renderFavoriteThumbnail = ({ item }) => {
    const { avatar } = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigation.navigate('Profile', { contact: item })}
      />
    );
  };
  const favorites = contacts.filter((contact) => contact.favorite);
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderFavoriteThumbnail}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
});
