import React, { useState } from "react";  
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableHighlight, View } from "react-native";
import {MD3DarkTheme, MD3LightTheme, PaperProvider, Switch, Text, useTheme } from "react-native-paper";
export default AppDarkMode =()=>{
    const [darkMode, setDarkMode] = useState(false);
    const PaperTheme = (darkMode)? MD3DarkTheme: MD3LightTheme;
    return(
      <PaperProvider>
        <View style={{...styles.containner, backgroundColor: PaperTheme.colors.background }}>
          <View style={{...styles.box, backgroundColor: PaperTheme.colors.background}}>
            <Text style={{...styles.text, color: PaperTheme.colors.onBackground}}>Dark Mode</Text>
            <Switch  value={darkMode} onChange={()=> setDarkMode(!darkMode)} />
          </View>
          <View style={{...styles.box, backgroundColor: PaperTheme.colors.primary}}>
            <Text style={{...styles.text, color: PaperTheme.colors.onPrimary}}>primary</Text>
          </View>
          <View style={{...styles.box, backgroundColor: PaperTheme.colors.secondary}}>
            <Text style={{...styles.text, color: PaperTheme.colors.onSecondary}}>secondary</Text>
          </View>
          <View style={{...styles.box, backgroundColor: PaperTheme.colors.error}}>
            <Text style={{...styles.text, color: PaperTheme.colors.onError}}>error</Text>
          </View>
        </View>
      </PaperProvider> 
    )
}
const styles = StyleSheet.create(
  {
    containner:{
      flex:1,
      paddingTop: 50
    },
    box:{
      flexDirection:"row",
      justifyContent: "space-around",
      margin: 10
    },
    text: {
      fontSize: 40
    }
  }
)