import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import DetailListItem from "../../components/DetailListItem";

export default function OptionsScreen() {
  return (
    <View style={styles.container}>
      <DetailListItem title="Update Profile" />
      <DetailListItem title="Change Language" />
      <DetailListItem title="Sign Out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
