import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../../utility/colors";
import OptionsScreen from "./OptionsScreen";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FIRE_BASE_AUTH } from "../../firebase/firebaseConfig"; //= getAuth
import useAuth from "../../hooks/useAuth"; // hook onAuthStateChanged
import { Avatar } from "react-native-paper";

const getTabBarIcon =
  (icon) =>
  ({ tintColor }) =>
    <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />;

const UserStack = createNativeStackNavigator();
const userProfile = FIRE_BASE_AUTH;


export default function UserScreenStack_copy({ navigation }) {
  return (
    <UserStack.Navigator initialRouteName="User">
      <UserStack.Screen
        name="User"
        component={UserScreenLayout}
        options={{
          headerTitle: userProfile.currentUser.email.split("@")[0],
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              style={{ colors: "blue", marginRight: 20 }}
              onPress={() => navigation.navigate("Options")}
            />
          ),
        }}
      />
      <UserStack.Screen name="Options" component={OptionsScreen} />
    </UserStack.Navigator>
  );
}

const UserScreenLayout = () => {
  console.log(userProfile.currentUser.email.split("")[0]);
  return (
    <View style={styles.container}>
      <Avatar.Text 
        style={styles.avtImg}
        size={100}
        label={userProfile.currentUser.email.split("")[0]}
        
      />

      <Text style={styles.infoUser}>
        Email: {userProfile.currentUser.email}
      </Text>
      <Text style={styles.infoUser}>UID: {userProfile.currentUser.uid}</Text>
      <Text style={styles.infoUser}>abc</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },

  avtImg: {
    margin: 5,
  },
  infoUser: {
    color: "rgb(255, 255, 255)",
    margin: 5,
  },
});
