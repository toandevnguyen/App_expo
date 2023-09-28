import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ color: "rgb(10, 10, 10)", fontSize: 24, fontWeight: "bold" }}
      >
        Home
      </Text>

      <Button
        style={{ margin: 10,  }}
        // style={styles.btn}
        mode="contained-tonal"
        onPress={() => navigation.navigate("Details")}
        icon={"clipboard-list"}
      >
        Details Screen
      </Button>

      <Button
        // style={styles.btn}
        // style={{ magin: 10 }}
        style={{ margin: 10, }}
        mode="contained-tonal"
        onPress={() => navigation.navigate("ScreenTest")}
        icon={"monitor-screenshot"}
      >
        Demo Screen
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
