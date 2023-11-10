import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { fetchContacts } from "../../../src/utility/api";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../../utility/colors";
import { fetchUserContact } from "../../utility/api";
import ContactThumbnail from "../../components/cpnLab2/ContactThumbnail";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import OptionsScreen from "./OptionsScreen";

const getTabBarIcon =
  (icon) =>
  ({ tintColor }) =>
    <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />;

const UserStack = createNativeStackNavigator();
export default function UserScreenStack({ navigation }) {
  return (
    <UserStack.Navigator initialRouteName="User">
      <UserStack.Screen
        name="User"
        component={UserScreenLayout}
        options={{
          headerTitle: "Me",
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
  const [user, setUser] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  

  //Đây là hàm callback được gọi sau khi component render. Nó sẽ thiết lập một lắng nghe sự kiện từ API
  React.useEffect(() => {
    fetchUserContact()
      .then((users) => {
        setUser(users);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(true);
        setError(true);
      });
  }, []);

  
  const { avatar, name, phone } = user;
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      )}
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
});
