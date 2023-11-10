import * as React from "react";
import { View } from "react-native";
import { Menu } from "react-native-paper";
const MenuItem = () => (
  <View style={{ flex: 1 }}>
    <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
    <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
    <Menu.Item
      leadingIcon="content-cut"
      onPress={() => {}}
      title="Cut"
      disabled
    />
    <Menu.Item
      leadingIcon="content-copy"
      onPress={() => {}}
      title="Copy"
      disabled
    />
    <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
  </View>
);
export default MenuItem;
