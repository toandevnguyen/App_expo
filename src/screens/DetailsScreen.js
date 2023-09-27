import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ color: "rgb(36, 116, 245)", fontWeight: "bold", fontSize: 24 }}
      >
        DetailsScreen
      </Text>
      <Button
        style={{
          margin: 10,
          fontSize: 24,
          backgroundColor: "rgb(158, 64, 142)",
        }}
        mode="contained-tonal"
        icon={"home"}
        onPress={() => navigation.navigate("Home")}
      >
        Back to Home Screen
      </Button>

      <Button
        // style={styles.button}
        style={{ margin: 10, backgroundColor: "rgb(19, 233, 58)" }}
        mode="contained-tonal"
        onPress={() => navigation.navigate("ScreenTest")}
        icon={"monitor-screenshot"}
      >
        Go to ScreenTest
      </Button>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
