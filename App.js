import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NativeBaseProvider } from 'native-base';

import AppNavigation from './Src/Screens/AppNavigation';
import Chatdetails from './Src/Screens/Chatdetails';
import Practicechat from './Src/Screens/Practicechat';
import Varification from './Src/Screens/Varification';
import Home from './Src/Screens/Home';

const App = () => {
  return (
  <NativeBaseProvider>
  <AppNavigation />
  
   {/* <Chatdetails/> */}
   {/* <Practicechat/> */}
   {/* <Varification/> */}
  {/* <Home/> */}
  </NativeBaseProvider>
)
}

export default App;

const styles = StyleSheet.create({});
