import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../utility/colors";
import { fetchRandomContact } from "../../utility/api";
import ContactThumbnail from "../../components/cpnLab2/ContactThumbnail";
import DetailListItem from "../../components/cpnLab1/DetailListItem";

export default function ProfileScreen({navigation,route}) {
  // const [contact, setContact] = React.useState({});
  // const{contacts}=route.params;
  // React.useEffect(() => {
  //   fetchRandomContact().then((contact) => setContact(contact));
  // }, []);

  const{contact}=route.params; //
  const { avatar, name, email, phone, cell } = contact; //lay tham so truyen vao, khi click vao 1 
  return (
    <View style={styles.container}>
      
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} email={phone} />
      </View>
      
      <View style={styles.detailsSection}>
        <DetailListItem 
            icon="mail"
            title={"Email"}
            subtitle={email}
        />
        <DetailListItem 
            icon="phone"
            title={"Work"}
            subtitle={phone}
        />
        <DetailListItem 
            icon="smartphone"
            title={"Personal"}
            subtitle={cell}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
});
