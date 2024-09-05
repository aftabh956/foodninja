import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NativeBaseProvider } from 'native-base';

import AppNavigation from './Src/Screens/AppNavigation';

const App = () => {
  return (
  <NativeBaseProvider>
  <AppNavigation />
  </NativeBaseProvider>
)
}

export default App;

const styles = StyleSheet.create({});
