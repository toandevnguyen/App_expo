import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function ScreenTest({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ color: "rgb(19, 233, 58)", fontSize: 24, fontWeight: "bold" }}
      >
        ScreenTest
      </Text>

      <Button
        style={{ margin: 10, backgroundColor: "rgb(158, 64, 142)" }}
        mode="contained-tonal"
        icon={"home"}
        onPress={() => navigation.navigate("Home")}
      >
        Back to Home Screen
      </Button>

      <Button
        style={{ margin: 10, backgroundColor: "rgb(36, 116, 245)" }}
        mode="contained-tonal"
        onPress={() => navigation.navigate("Details")}
        icon={"clipboard-list"}
      >
        Go to Details Screen
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
