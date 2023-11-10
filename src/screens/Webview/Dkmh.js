import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Dkmh({navigator}) {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://dkmh.tdmu.edu.vn/#/tkb-tuan' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
