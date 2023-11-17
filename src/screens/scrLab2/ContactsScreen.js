/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

import ProfileScreen from "./ProfileScreen";
import ContactListItem from "../../../src/components/cpnLab2/ContactListItem";
import { fetchContacts } from "../../../src/utility/api";
import colors from "../../utility/colors";

const keyExtractor = ({ phone }) => phone;

const ContactStack = createNativeStackNavigator(); //ngăn xếp phía trên
const ContactsScreenStack = () => {
  return (
    <ContactStack.Navigator initialRouteName="ContactsScreen">
      {/* component-màn hình nào nằm trên thì sẽ hiển thị trước
        name sẽ hiển thị trên header và phải trùng với navigation.navigate('name')

     */}

      <ContactStack.Screen name="ContactsScreen" component={ContactsScreen} />
      <ContactStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => {
          const { contact } = route.params;
          const { name } = contact;
          return {
            title: name.split(" ")[0],
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.blue,
            },
          };
        }}
      />
    </ContactStack.Navigator>
  );
};

const ContactsScreen = ({ navigation }) => {
  const [contacts, setContacts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  // Đây là một hook trong React, cho phép bạn thực hiện các hiệu ứng phụ sau khi render.
  React.useEffect(() => {
    fetchContacts()
      .then((contacts) => {
        setContacts(contacts);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError(true);
      });
  }, []);
  //sort
  const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
  const renderContact = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        // onPress={()=>{}}
        // onPress={() => navigation.navigate("Profile")}

        onPress={() => navigation.navigate("Profile", { contact: item })} //"Profile" phải trùng khớp với ContactStack.Screen name="Profile"
      />
    );
  };
  //Render
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color="blue" size="large" />}
      {error && <Text>Đợi xíu...</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderContact}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },
});

export default ContactsScreenStack;
