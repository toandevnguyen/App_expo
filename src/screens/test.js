import { View, Text } from "react-native";

import React from "react";
import { TextInput } from "react-native-paper";

export default function test() {
  return (
    <View>
      <Text>Outlined TextInput:</Text>
      <TextInput
        label="Username"
        left={<TextInput.Icon name="account" />}
        mode="outlined"
        style={{ margin: 10 }}
      />
      <Text>Flat TextInput:</Text>
      <TextInput
        label="Email"
        left={<TextInput.Icon name="email" />}
        mode="flat"
        style={{ margin: 10 }}
      />
    </View>
  );
}
