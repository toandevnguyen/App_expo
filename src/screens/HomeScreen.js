import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ color: "rgb(158, 64, 142)", fontSize: 24, fontWeight: "bold" }}
      >
        HomeScreen
      </Text>

      <Button
        style={{ margin: 10, backgroundColor: "rgb(36, 116, 245)" }}
        // style={styles.btn}
        mode="contained-tonal"
        onPress={() => navigation.navigate("Details")}
        icon={"clipboard-list"}
      >
        Go to Details Screen
      </Button>

      <Button
        // style={styles.btn}
        // style={{ magin: 10 }}
        style={{ margin: 10, backgroundColor: "rgb(19, 233, 58)" }}
        mode="contained-tonal"
        onPress={() => navigation.navigate("ScreenTest")}
        icon={"monitor-screenshot"}
      >
        Go to ScreenTest
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    margin: 10,
  },
});
