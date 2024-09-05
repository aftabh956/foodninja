import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import Onboarding1 from './Onboarding1';
import OnBoarding from './OnBoarding';
import Loginscreen from './Loginscreen';
import Textfield from '../Components/CustomTextField';
import CustomTextField from '../Components/CustomTextField';
import SigninScreen from './SigninScreen';
import SignupProcess from './SignupProcess';
import PaymentScreen from './PaymentScreen';
import UploadPhoto from './UploadPhoto';
import Photopreview from './Photopreview';
import Location from './Location';
import Signupcomplete from './Signupcomplete';
import Varification from './Varification';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name='SigninScreen' component={SigninScreen}/>
        <Stack.Screen name='Loginscreen' component={Loginscreen}/>
        <Stack.Screen name='SignupProcess' component={SignupProcess}/>
        <Stack.Screen name='PaymentScreen' component={PaymentScreen}/>
        <Stack.Screen name='UploadPhoto' component={UploadPhoto}/>
        <Stack.Screen name='Photopreview' component={Photopreview}/>
        <Stack.Screen name='Location' component={Location}/>
        <Stack.Screen name='Signupcomplete' component={Signupcomplete}/>
        <Stack.Screen name='Varification' component={Varification}/>
        {/* <Stack.Screen name='CustomTextField' component={CustomTextField}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
