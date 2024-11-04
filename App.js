import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NativeBaseProvider } from 'native-base';

import AppNavigation from './Src/Screens/AppNavigation';
import Chatdetails from './Src/Screens/Chatdetails';

const App = () => {
  return (
  <NativeBaseProvider>
  {/* <AppNavigation /> */}
  
   <Chatdetails/>
  </NativeBaseProvider>
)
}

export default App;

const styles = StyleSheet.create({});
