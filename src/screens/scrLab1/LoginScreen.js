import {
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import {
  Button,
  TextInput,
  Switch,
  PaperProvider,
  Avatar,
  HelperText,
  // KeyboardAvoidingView,
} from "react-native-paper";
import React from "react";

import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FIRE_BASE_AUTH } from "../../firebase/firebaseConfig";
import useAuth from "../../hooks/useAuth";

// import { FIRE_BASE_AUTH } from "../../firebase/firebaseConfig";

export default function LoginScreen({ navigation }) {
  const [isFocusTxtInput, setIsFocusTxtInput] = React.useState(false);
  const [button, setButton] = React.useState(false);
  const [textUserName, setTextUserName] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");
  const { user } = useAuth();
  const validateEmail = (textUserName) => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,3}))$/; //gg bard
    // const reg = /^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,15})$/; //Bing
    // var reg = /^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,15})$/;//chatGPT
    return reg.test(textUserName);
  };

  const hasErrorsEmail = () => {
    return !validateEmail(textUserName);
  };

  const hasErrorsPassword = () => {
    return textPassword.length < 8;
  };

  const handleResetPassword = async () => {
    await sendPasswordResetEmail(FIRE_BASE_AUTH, textUserName)
      .then(() => {
        // Password reset email sent!
        alert(
          "Một liên kết đã gửi đến địa chỉ Email của bạn. Vui lòng kiểm tra Email để đặt lại mật khẩu!"
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Địa chỉ Email chưa tồn tại. Vui lòng chọn một Email khác!");
        // ..
      });
  };

  const handleSubmit = async () => {
    if (textUserName && textPassword) {
      try {
        const isUserLogin = await signInWithEmailAndPassword(
          FIRE_BASE_AUTH,
          textUserName,
          textPassword,
          setButton(true)
          // navigation.navigate("HomeScreen")
        );
        // navigation.navigate("HomeScreen", {
        //   emailcurrentUser: isUserLogin.user.email,

        // });
      } catch (err) {
        setButton(false);
        alert(
          "Tài khoản " +
            textUserName +
            " chưa được đăng ký hoặc nhập sai mật khẩu!"
        );

        console.log("got error: ", err.message);
      }
    }
    // else {
    //   alert("Tài khoản "+textUserName+" chưa được đăng ký hoặc nhập sai mật khẩu!");
    // }
  };
  const imgBg = require("../../../assets/gif/quby_niem_dem_hat.gif");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imgBg}
        resizeMode="contain"
        style={styles.imgbg}
      />
      {/* <Avatar.Image
        style={styles.avtImg}
        size={100}
        source={require("../../../assets/AvtTonDev.png")}
      /> */}

      <View style={styles.groupTxtInput}>
        <TextInput
          style={styles.txtInput}
          mode="outlined"
          onFocus={() => setIsFocusTxtInput(true)}
          activeOutlineColor={
            hasErrorsEmail() ? "rgb(255, 43, 43)" : "rgb(61, 243, 25)"
          }
          outlineColor="rgb(0, 0, 0)"
          label="Email"
          textColor="rgb(0, 0, 0)"
          // labelStyle={{color:"black"}}
          placeholder="vd: abc@gmail.com"
          placeholderTextColor="rgb(149, 145, 145)"
          value={textUserName}
          onChangeText={(textUserName) => setTextUserName(textUserName)}
          left={<TextInput.Icon icon="email" size={20} color="rgb(0, 0, 0)"  />}
          right={<TextInput.Affix text=" 0/16" />}
        />
        {isFocusTxtInput ? (
          <HelperText type="error" visible={hasErrorsEmail()}>
            Nhập đúng định dạng địa chỉ Email!
          </HelperText>
        ) : null}

        <TextInput
          mode="outlined"
          activeOutlineColor={
            hasErrorsPassword() ? "rgb(255, 43, 43)" : "rgb(61, 243, 25)"
          }
          onFocus={() => setIsFocusTxtInput(true)}
          left={
            <TextInput.Icon icon="shield-key" size={20} color="rgb(0, 0, 0)" />
          }
          outlineColor="rgb(0, 0, 0)"
          style={styles.txtInput}
          secureTextEntry={true}
          placeholder="*******"
          maxLength={8}
          textColor="rgb(0, 0, 0)"
          // passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; maxlength: 8;"

          //right={<TextInput.Icon icon="eye" />}
          placeholderTextColor="rgb(149, 145, 145)"
          label="Password"
          value={textPassword}
          onChangeText={(textPassword) => setTextPassword(textPassword)}
        />
        {isFocusTxtInput ? (
          <HelperText type="error" visible={hasErrorsPassword()}>
            Mật khẩu 8 ký tự!
          </HelperText>
        ) : null}
      </View>

      <View style={styles.txtForgetPassWord}>
        <TouchableOpacity onPress={handleResetPassword}>
          <Text style={{ color: "blue" }}>Quên mật khẩu? </Text>
        </TouchableOpacity>
      </View>

      <Button
        disabled={hasErrorsEmail() ? true : false}
        mode="outlined"
        style={styles.btnLogin}
        textColor="rgb(255, 255, 255)"
        loading={button}
        icon={button ? null : "login"}
        onPress={handleSubmit}
      >
        Login
      </Button>

      <View style={styles.txtSignUp}>
        <Text style={{ color: "black" }}>Chưa có tài khoản? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
        >
          <Text style={{ color: "green" }}>Đăng ký! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },

  imgbg: {
    width: "100%",
    height: "70%",

    // backgroundColor: "#000",
  },

  groupTxtInput: {
    // backgroundColor: "#ce33d6",
    // top: 250,
    bottom: 100,
    // marginBottom: 100,
  },

  txtInput: {
    //marginVertical: 5,
    // color: "white",

    width: 280,
    backgroundColor: "rgb(255, 255, 255)",
  },

  txtForgetPassWord: {
    // flexDirection: "row",
    // position: "relative",
    // start: 60,
    // backgroundColor: "#ce33d6",
    bottom: 100,
    // top: 425,
    color: "blue",
  },

  btnLogin: {
    width: 250,

    backgroundColor: "rgb(32, 200, 130)",
    borderRadius: 5,
    // position: "relative",
    bottom: 90,
    // top: 450,
    // backgroundColor: "#000",
  },

  txtSignUp: {
    flexDirection: "row",
    // position: "relative",
    // start: 90,
    // backgroundColor: "#ce33d6",
    bottom: 80,
    // top: 500,
  },
});
