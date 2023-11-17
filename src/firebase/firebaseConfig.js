// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFireStoreDB } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDMc-mx61Yoitz89s8LiuFn_WermR9Tac8',
  authDomain: 'duytoanexpoapp.firebaseapp.com',
  projectId: 'duytoanexpoapp',
  storageBucket: 'duytoanexpoapp.appspot.com',
  messagingSenderId: '871893177611',
  appId: '1:871893177611:web:4a19ffa906da2b2fa9be0e',
  measurementId: 'G-19KH15K14L',
};

// Initialize Firebase

export const FIRE_BASE_EXPO_APP = initializeApp(firebaseConfig);
export const FIRE_BASE_AUTH = getAuth(FIRE_BASE_EXPO_APP);
// export const FIRE_BASE_FIRE_STORE_DB= getFireStoreDB(FIRE_BASE_EXPO_APP);

// const analytics = getAnalytics(app);
