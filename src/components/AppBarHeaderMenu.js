import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar, Menu } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import MenuItem from "./MenuItem";

export default function AppBarHeaderMenu({ navigation, route, options, back }) {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon={"dots-vertical"} onPress={openMenu} />}
        >
          <Menu.Item
            title="Home"
            leadingIcon={"home"}
            onPress={() => {
              console.log("Open 1 was pressed");
            }}
          />
          <Menu.Item
            title="Details"
            leadingIcon={"clipboard-list"}
            onPress={() => {
              navigation.navigate("Details");
              closeMenu();
              //console.log("Open 2 was pressed");
            }}
          />
          <Menu.Item
            title="Screen Test"
            leadingIcon={"monitor-screenshot"}
            onPress={() => {
              navigation.navigate("ScreenTest");
              closeMenu();
            }}
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({});
