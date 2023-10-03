import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

export default function AppBar() {
  const _goBack = () => console.log("Went back");
  const _handleSearch = () => console.log("Searching");
  const _handleMore = () => console.log("Shown more");
  return (
    <Appbar.Header
      style={{
        
        position: "absolute",
        right: 0,
        zIndex: 1,
      }}
    >
      {/* <Appbar.BackAction onPress={_goBack} />  */}
      {/* <Appbar.Content title="Title" /> */}
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({});
