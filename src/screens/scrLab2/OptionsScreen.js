import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import DetailListItem from "../../components/cpnLab1/DetailListItem";
import { deleteUser, signOut } from "firebase/auth";
import { FIRE_BASE_AUTH } from "../../firebase/firebaseConfig";

export default function OptionsScreen({ navigation }) {
  const handleRemoveAcc = async () => {
    try {
      // Lấy người dùng hiện tại
      const user = FIRE_BASE_AUTH.currentUser;

      if (user) {
        // Xóa tài khoản người dùng
        await deleteUser(user)
          .then(() => {
            // User deleted.
            alert("Tài khoản đã bị xóa.");
          })
          .catch((error) => {
            // An error ocurred
            
          });
        // await user.delete();
        // alert("Tài khoản" + { user } + "đã bị xóa."),
      } else {
        console.log("Không có người dùng đăng nhập.");
      }
    } catch (error) {
      console.error("Lỗi xóa tài khoản:", error);
    }
  };

  const handleLogOut = async () => {
    await signOut(FIRE_BASE_AUTH);
  };

  return (
    <View style={styles.container}>
      <DetailListItem title="Update Profile" />
      <DetailListItem title="Change Language" />

      <TouchableOpacity onPress={handleLogOut}>
        <DetailListItem title="Sign Out" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRemoveAcc}>
        <DetailListItem title="Remove Account" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
