import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrower from 'expo-web-browser';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, TextInput, HelperText } from 'react-native-paper';

import { FIRE_BASE_AUTH } from '../../firebase/firebaseConfig'; //getAuth
import useAuth from '../../hooks/useAuth'; //onAuthStateChanged

WebBrower.maybeCompleteAuthSession();
export default function LoginScreen({ navigation }) {
  const [token, setToken] = React.useState('');

  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    // androidClientId: '871893177611-f4ssc5sva2glknmenq7t6ssl9ftg2kso.apps.googleusercontent.com',//cu
    androidClientId: '802640332383-a7balt4j9ovg16kmhqqqvmil154k7t83.apps.googleusercontent.com', //phonebook-signin-gg
    // webClientId: '802640332383-idkv3v1gl3pks10a3euol19ufi3qp5pk.apps.googleusercontent.com', //phonebook-signin-gg
    webClientId: '871893177611-q8231d5rvf1lk6jqgqpkdpelml5fboer.apps.googleusercontent.com', //firebase (duytoanexpoapp)
  });

  React.useEffect(() => {
    handleSignInWithGoogle();
  }, [response, token]);

  async function handleSignInWithGoogle() {
    const user = await getLocalUser();
    // console.log('user', user);
    // alert('user', user);
    if (!user) {
      if (response?.type === 'success') {
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      // console.log({ userInfo });
      // alert(userInfo.email);
      // navigation.navigate('HomeScreen');
    }
  }
  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem('@user');
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await response.json();
      await AsyncStorage.setItem('@user', JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {}
  };

  const [isFocusTxtInput, setIsFocusTxtInput] = React.useState(false);
  const [button, setButton] = React.useState(false);
  const [textUserName, setTextUserName] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  // const { user } = useAuth();
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
          'Một liên kết đã gửi đến địa chỉ Email của bạn. Vui lòng kiểm tra Email để đặt lại mật khẩu!',
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Địa chỉ Email chưa tồn tại. Vui lòng chọn một Email khác!');
      });
  };

  const handleSubmit = async () => {
    if (textUserName && textPassword) {
      try {
        await signInWithEmailAndPassword(
          FIRE_BASE_AUTH,
          textUserName,
          textPassword,
          setButton(true),
          // navigation.navigate("HomeScreen")
        );
        // navigation.navigate("HomeScreen", {
        //   emailcurrentUser: isUserLogin.user.email,

        // });
      } catch (err) {
        setButton(false);
        alert('Tài khoản ' + textUserName + ' chưa được đăng ký hoặc nhập sai mật khẩu!');

        console.log('got error: ', err.message);
      }
    }
  };
  const imgBg = require('../../../assets/gif/quby_niem_dem_hat.gif');

  return (
    <View style={styles.container}>
      <ImageBackground source={imgBg} resizeMode="contain" style={styles.imgbg} />
      <View style={styles.groupTxtInput}>
        <TextInput
          style={styles.txtInput}
          mode="outlined"
          onFocus={() => setIsFocusTxtInput(true)}
          activeOutlineColor={hasErrorsEmail() ? 'rgb(255, 43, 43)' : 'rgb(61, 243, 25)'}
          outlineColor="rgb(0, 0, 0)"
          label="Email"
          textColor="rgb(0, 0, 0)"
          // labelStyle={{color:"black"}}
          placeholder="vd: abc@gmail.com"
          placeholderTextColor="rgb(149, 145, 145)"
          value={textUserName}
          onChangeText={(textUserName) => setTextUserName(textUserName)}
          left={<TextInput.Icon icon="email" size={20} color="rgb(0, 0, 0)" />}
          right={<TextInput.Affix text=" 0/16" />}
        />
        {isFocusTxtInput ? (
          <HelperText type="error" visible={hasErrorsEmail()}>
            Nhập đúng định dạng địa chỉ Email!
          </HelperText>
        ) : null}

        <TextInput
          mode="outlined"
          activeOutlineColor={hasErrorsPassword() ? 'rgb(255, 43, 43)' : 'rgb(61, 243, 25)'}
          onFocus={() => setIsFocusTxtInput(true)}
          left={<TextInput.Icon icon="shield-key" size={20} color="rgb(0, 0, 0)" />}
          outlineColor="rgb(0, 0, 0)"
          style={styles.txtInput}
          secureTextEntry
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
          <Text style={{ color: 'blue' }}>Quên mật khẩu? </Text>
        </TouchableOpacity>
      </View>

      <Button
        disabled={!!hasErrorsEmail()}
        mode="outlined"
        style={styles.btnLogin}
        textColor="rgb(255, 255, 255)"
        loading={button}
        icon={button ? null : 'login'}
        onPress={handleSubmit}>
        Login
      </Button>

      <View style={styles.txtSignUp}>
        <Text style={{ color: 'black' }}>Chưa có tài khoản? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}>
          <Text style={{ color: 'green' }}>Đăng ký! </Text>
        </TouchableOpacity>
      </View>
      {!userInfo ? (
        <Button
          style={styles.btnSocialAuth}
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}>
          GG
        </Button>
      ) : (
        <>
          <Text>Name: {userInfo.name}</Text>
          <Button
            style={styles.btnSocialAuth}
            onPress={async () => await AsyncStorage.removeItem('@user')}>
            xoa
          </Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  imgbg: {
    width: '100%',
    height: '70%',

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
    backgroundColor: 'rgb(255, 255, 255)',
  },

  txtForgetPassWord: {
    // flexDirection: "row",
    // position: "relative",
    // start: 60,
    // backgroundColor: "#ce33d6",
    bottom: 100,
    // top: 425,
    color: 'blue',
  },

  btnLogin: {
    width: 250,

    backgroundColor: 'rgb(32, 200, 130)',
    borderRadius: 5,
    // position: "relative",
    bottom: 90,
    // top: 450,
    // backgroundColor: "#000",
  },

  txtSignUp: {
    flexDirection: 'row',
    // position: "relative",
    // start: 90,
    // backgroundColor: "#ce33d6",
    bottom: 80,
    // top: 500,
  },

  btnSocialAuth: {
    bottom: 70,
    marginVertical: 5,
  },
});

//SHA1 Fingerprint(15/11)    80:E8:E4:D2:6E:E2:F9:23:0E:5C:65:C4:6E:D7:CB:2C:CB:51:CA:48
//Client android ID(15/11): 802640332383-a7balt4j9ovg16kmhqqqvmil154k7t83.apps.googleusercontent.com
//Web client (auto created by Google Service) 871893177611-q8231d5rvf1lk6jqgqpkdpelml5fboer.apps.googleusercontent.com
//Client android ID: 871893177611-f4ssc5sva2glknmenq7t6ssl9ftg2kso.apps.googleusercontent.com
