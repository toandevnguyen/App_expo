/* eslint-disable prettier/prettier */
// import 'expo-dev-client';

import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, TextInput, Avatar, HelperText } from 'react-native-paper';

import { FIRE_BASE_AUTH } from '../../firebase/firebaseConfig';

// import { FIRE_BASE_AUTH } from "../../firebase/firebaseConfig";

export default function SignUpScreen({ navigation }) {
  const [textUserName, setTextUserName] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [button, setButton] = React.useState(false);
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

  //Hàm async thường được sử dụng để xử lý các tác vụ bất đồng bộ như fetch dữ liệu từ mạng, gọi API
  const handleSubmit = async () => {
    if (textUserName && textPassword) {
      try {
        await createUserWithEmailAndPassword(
          FIRE_BASE_AUTH,
          textUserName,
          textPassword,
          setButton(true),
          alert('Tài khoản: ', textUserName, '\n Password: ', textPassword),
          // navigation.navigate("LoginScreen")
        );
        await signOut(FIRE_BASE_AUTH);
      } catch (error) {
        alert(
          'Tài khoản ',
          textUserName,
          ' đã được tồn tại.',
          '\n',
          'Vui lòng nhập địa chỉ gmail khác!',
        );
        console.log('got error: ', error.message);
      }
    }
  };
  // const [loading, setLoading] = useState(false);
  // const auth = FIRE_BASE_AUTH;
  // const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  // const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

  return (
    <View style={styles.container}>
      {/* <About /> */}
      {/* <Switch 
        
        onValueChange={onToggleSwitch}
        value={isSwitchOn}
      /> */}
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Welcome To My App!</Text>
        {/* <Avatar.Icon size={50} icon="cat" /> */}
        <Avatar.Image
          style={{ marginTop: 100 }}
          size={100}
          source={require('../../../assets/AvtTonDev.png')}
        />
        <View style={styles.textInput}>
          <TextInput
            // style={{ marginBottom: 10 }}
            label="Username"
            placeholder="vd : abc@gmail.com"
            placeholderTextColor="rgb(106, 100, 100)"
            value={textUserName}
            onChangeText={(textUserName) => setTextUserName(textUserName)}
            right={<TextInput.Affix text=" 0/16" />}
          />
          <HelperText type="error" visible={hasErrorsEmail()}>
            Nhập đúng định dạng địa chỉ Email!
          </HelperText>

          <TextInput
            secureTextEntry
            placeholder="*******"
            maxLength={8}
            // passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; maxlength: 8;"

            //right={<TextInput.Icon icon="eye" />}
            placeholderTextColor="rgb(106, 100, 100)"
            label="Password"
            value={textPassword}
            onChangeText={(textPassword) => setTextPassword(textPassword)}
          />
          <HelperText type="error" visible={hasErrorsPassword()}>
            Khong de trong va it nhat 8 ky tu
          </HelperText>
        </View>

        <Button
          loading={button}
          icon={button ? null : 'plus'}
          mode="contained-tonal"
          onPress={handleSubmit}
          // onPress={() => {
          //   // alert(
          //   //   "Xin chao " + textUserName + "\n" + "Password: " + textPassword
          //   // );
          //   navigation.navigate("LoginScreen");
          // }}
        >
          Sign Up
        </Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: '#ce33d6',
  },

  image: {
    //backgroundColor: "#000",
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',

    marginBottom: 40,

    // flex: 1,

    //backgroundColor: "#000",
  },

  textInput: {
    width: '60%',
    marginVertical: 10,
    //backgroundColor:"green",
    //justifyContent: "center",
    alignItems: 'stretch',
  },
});
