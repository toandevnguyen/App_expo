import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import OptionsScreen from './OptionsScreen';
import { FIRE_BASE_AUTH } from '../../firebase/firebaseConfig'; //= getAuth
import colors from '../../utility/colors';
// import {} from '../../../App'

const getTabBarIcon =
  (icon) =>
  ({ tintColor }) => <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />;

const UserStack = createNativeStackNavigator();
const userProfile = FIRE_BASE_AUTH;

export default function UserScreenStack_copy({ navigation }) {
  return (
    <UserStack.Navigator initialRouteName="User">
      <UserStack.Screen
        name="User"
        component={UserScreenLayout}
        options={{
          headerTitle: 'Me',
          // headerTitle: userProfile.currentUser.email.split('@')[0],
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              style={{ colors: 'blue', marginRight: 20 }}
              onPress={() => navigation.navigate('Options')}
            />
          ),
        }}
      />
      <UserStack.Screen name="Options" component={OptionsScreen} />
    </UserStack.Navigator>
  );
}

const UserScreenLayout = () => {
  return (
    <View style={styles.container}>
      {/* <Avatar.Text
        style={styles.avtImg}
        size={100}
        label={userProfile.currentUser.email.split('')[0]}
      /> */}
      <Avatar.Image
        source={{ uri: userProfile?.currentUser?.photoURL }} // Dấu ? trong userProfile?.currentUser.photoURL là toán tử optional chaining trong JavaScript. Toán tử này giúp tránh lỗi TypeError khi bạn cố gắng truy cập thuộc tính của một đối tượng có thể là null hoặc undefined.
        style={styles.avtImg}
        size={100}
      />

      <Text style={styles.infoUser}>ProviderId: {userProfile?.currentUser?.providerId}</Text>
      <Text style={styles.infoUser}>Họ tên: {userProfile?.currentUser?.displayName}</Text>
      <Text style={styles.infoUser}>Email: {userProfile?.currentUser?.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },

  avtImg: {
    margin: 5,
  },
  infoUser: {
    color: 'rgb(255, 255, 255)',
    margin: 5,
  },
});
