import { StyleSheet, Text, View, Alert, ImageBackground } from "react-native";
import {
  Button,
  TextInput,
  Switch,
  PaperProvider,
  Avatar,
} from "react-native-paper";
import React from "react";

export default function Login() {
  const [textUserName, setTextUserName] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

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
          source={require("../../assets/AvtTonDev.png")}
        />
        <View style={styles.textInput}>
          <TextInput
          
            style={{ marginBottom: 10}}
            label="Username"
            placeholder="vd : TonTapCode"
            placeholderTextColor="rgb(106, 100, 100)"
            value={textUserName}
            onChangeText={(textUserName) => setTextUserName(textUserName)}
            right={<TextInput.Affix text=" 0/16" />}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="*******"
            maxLength={8}
           // passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; maxlength: 8;"
            
            //right={<TextInput.Icon icon="eye" />}
            placeholderTextColor="rgb(106, 100, 100)"
            label="Password"
            value={textPassword}
            onChangeText={(textPassword) => setTextPassword(textPassword)}
          />
        </View>

        <Button
          icon="login"
          mode="contained-tonal"
          onPress={() => alert("Xin chao " + textUserName +"\n"+ "Password: "+ textPassword)}
        >
          Login
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
    backgroundColor: "#ce33d6",
  },

  image: {
    //backgroundColor: "#000",
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",

    marginBottom: 40,

    // flex: 1,

    //backgroundColor: "#000",
  },

  textInput: {
    width: "60%",
    marginVertical: 10,
    //backgroundColor:"green",
    //justifyContent: "center",
    alignItems: "stretch",
  },
});
