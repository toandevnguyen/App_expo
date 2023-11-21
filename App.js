import 'react-native-gesture-handler';
// import 'expo-dev-client';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import * as Google from 'expo-auth-session/providers/google';
// import * as WebBrowser from 'expo-web-browser';
// import {
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
//   GoogleAuthProvider,
//   signInWithCredential,
//   onAuthStateChanged,
// } from 'firebase/auth';
import React from 'react';
// import { ActivityIndicator, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DrawerNavigator from './src/components/cpnLab2/DrawerNavigator';
import useAuth from './src/hooks/useAuth'; //hook onAuthStateChanged
import LoginScreen from './src/screens/scrLab1/LoginScreen';
import SignUpScreen from './src/screens/scrLab1/SignUpScreen';
import WelcomeScreen from './src/screens/scrLab1/WelcomeScreen';
// import { FIRE_BASE_AUTH } from '../App_expo/src/firebase/firebaseConfig'; //getAuth

const NativeStack = createNativeStackNavigator();

// Được gọi khi người dùng đăng nhập. hoàn thành auth session nếu không có một phiên trước đó
// WebBrowser.maybeCompleteAuthSession();

const App = () => {
  //const [userInfo, setUserInfo] = React.useState();
  const userLoginEmail = useAuth();
  console.log(' file: App.js:35 ~ App ~ userLoginEmail:', userLoginEmail.user);
  // console.log('got user:', userLoginEmail);

  // const [loading, setLoading] = React.useState(false);
  // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
  //   iosClientId: '',
  //   androidClientId: '802640332383-a7balt4j9ovg16kmhqqqvmil154k7t83.apps.googleusercontent.com', //phonebook-signin-gg 17/11 com.tontapcode.appexpo
  //   webClientId: '871893177611-q8231d5rvf1lk6jqgqpkdpelml5fboer.apps.googleusercontent.com', //firebase (duytoanexpoapp)
  // });

  // // const getLocalUser = async () => {
  // //   try {
  // //     setLoading(true);
  // //     const userJSON = await AsyncStorage.getItem('@user');
  // //     const userData = userJSON ? JSON.parse(userJSON) : null;
  // //     setUserInfo(userData);
  // //   } catch (e) {
  // //     console.log(e, 'Error getting local user');
  // //   } finally {
  // //     setLoading(false);
  // //   }
  // // };

  // React.useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { id_token } = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);
  //     signInWithCredential(FIRE_BASE_AUTH, credential);
  //   }
  // }, [response]);

  // // React.useEffect(() => {
  // //   getLocalUser();
  // //   const unsub = onAuthStateChanged(FIRE_BASE_AUTH, async (user) => {
  // //     if (user) {
  // //       await AsyncStorage.setItem('@user', JSON.stringify(user));
  // //       console.log(JSON.stringify(user, null, 2));
  // //       setUserInfo(user);
  // //     } else {
  // //       console.log('user not authenticated');
  // //     }
  // //   });
  // //   return () => unsub();
  // // }, []);

  // if (loading)
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // return userInfo ? <DrawerNavigator /> : <LoginScreen promptAsync={promptAsync} />;
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          {userLoginEmail.user ? (
            <NativeStack.Navigator initialRouteName="HomeScreen">
              <NativeStack.Screen
                name="HomeScreen"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
                // console.log("userLoginEmail"),
              />
            </NativeStack.Navigator>
          ) : (
            <NativeStack.Navigator initialRouteName="WelcomeScreen">
              <NativeStack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <NativeStack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                // options={{ headerShown: false }}
              />
              <NativeStack.Screen
                name="LoginScreen"
                component={LoginScreen}
                // children={(props) => <LoginScreen {...props} promptAsync={promptAsync} />}

                // options={{ headerShown: false }}
              />
            </NativeStack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;

//Todo: để mai làm
//? tao làm gì?
//! cẩn thận mày
