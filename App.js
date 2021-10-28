// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import Home from "./src/Home";
import { NativeBaseProvider, Box } from 'native-base';
export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{...styles.container }}>
    <View >
      <Home/>
        
    </View>
      </SafeAreaView>
      </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
