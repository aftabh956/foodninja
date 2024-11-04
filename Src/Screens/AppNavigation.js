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
import Viamethod from './Viamethod';
import Setpassword from './Setpassword';
import Resetpassword from './Resetcomplete';
import Resetcomplete from './Resetcomplete';
import Homescreen from './Homescreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Cartscreen from './Cartscreen';
import Chatscreen from './Chatscreen';
import {moderateScale} from 'react-native-size-matters';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import TabbarComponent from '../Components/TabbarComponent';
import Nearestrestaurant from './Nearestrestaurant';
import DetailProduct from './DetailProduct';
import PopularMenu from './PopularMenu';
import DetailMenu from './DetailMenu';
import Filterscreen from './Filterscreen';
import NotificationScreen from './NotificationScreen';
import VoucerPromo from './VoucherPromo';
import VoucherPromo from './VoucherPromo';
import Chatdetails from './Chatdetails';
import Callringing from './Callringing';
import Finishorder from './Finishorder';
import Orderdetails from './Orderdetails';
import Confirmorder from './Confirmorder';
import Editlocation from './Editlocation';
import Editpayment from './Editpayment';


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const AppNavigation = () => {
  const obj = {
    id: 'name',
    name: 'Shehriyar',
  };
  const obj2 = {
    ...obj,
    icon: 'home',
  };
  console.log(obj2, '=================<');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="Loginscreen" component={Loginscreen} />
        <Stack.Screen name="SignupProcess" component={SignupProcess} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
        <Stack.Screen name="Photopreview" component={Photopreview} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Signupcomplete" component={Signupcomplete} />
        <Stack.Screen name="Viamethod" component={Viamethod} />
        <Stack.Screen name="Varification" component={Varification} />
        <Stack.Screen name="Setpassword" component={Setpassword} />
        <Stack.Screen name="Resetcomplete" component={Resetcomplete} />
        <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
        <Stack.Screen name="NearestRestaurant" component={Nearestrestaurant} />
        <Stack.Screen name="PopularMenu" component={PopularMenu} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="DetailMenu" component={DetailMenu} />
        <Stack.Screen name="Filterscreen" component={Filterscreen} />
        {/* <Stack.Screen name="Homescreen" component={Homescreen} /> */}
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="VoucherPromo" component={VoucherPromo} />
        <Stack.Screen name="Chatdetails" component={Chatdetails} />
        <Stack.Screen name="callringing" component={Callringing} />
        <Stack.Screen name="Finishorder" component={Finishorder} />
        <Stack.Screen name="Orderdetails" component={Orderdetails} />
        <Stack.Screen name="Confirmorder" component={Confirmorder} />
        <Stack.Screen name="Editlocation" component={Editlocation} />
        <Stack.Screen name="Editpayment" component={Editpayment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const Tabnavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName
      ="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.lightgrey,
          position: 'absolute',
          marginHorizontal: moderateScale(10, 0.6),
          borderRadius: moderateScale(12, 0.6),
          borderTopWidth: 0,
          height: windowheight * 0.09,
          overflow: 'hidden',
          bottom: moderateScale(8),
          // paddingHorizontal:moderateScale(15,0.6)
        },
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          let color = colors.primary;
          let size = moderateScale(20, 0.3);
          let type = Ionicons;
          if (route.name === 'Home') {
            iconName = 'home';
            color = colors.primary;
          } else if (route.name === 'Profile') {
            iconName = 'person';
            color = colors.primary;
          } else if (route.name === 'Cart') {
            iconName ='shopping-cart';
            type = Feather;
            color = colors.primary;
          } else if (route.name === 'Chat') {
            iconName = 
             'chatbox-ellipses-outline';
            color = colors.primary;
          }
          return focused ? (
            <View
              style={[
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: moderateScale(10, 0.6),
                  backgroundColor: '#26402f',
                  borderRadius: moderateScale(12, 0.6),
                  width: windowwidth * 0.25,
                  height: windowheight * 0.06,
                  justifyContent: 'center',
                  marginLeft: moderateScale(25, 0.6),
                },
                route.name === 'Chat' && {
                  marginRight: moderateScale(45, 0.6),
                },
              ]}>
              <Icon
                name={iconName}
                as={type}
                color={colors.primary}
                size={22}
              />
              <Text style={{color: colors.white, fontWeight: 'bold'}}>
                {route.name}
              </Text>
            </View>
          ) : (
            <Icon
              name={iconName}
              as={type}
              style={{color: '#48785a'}}
              size={22}
            />
          );
        },
      })}>
      <Tabs.Screen name="Home" component={Homescreen} />
      {/* <Tabs.Screen name="NearestRestaurant" component={Nearestrestaurant} /> */}
      <Tabs.Screen name="Profile" component={Profile} />
      <Tabs.Screen name="Cart" component={Cartscreen} />
      <Tabs.Screen name="Chat" component={Chatscreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({});

const operator = [1, 2];
const operator2 = [...operator, 3, 4, 5];

const obj = {
  id: 'name',
  name: 'Shehriyar',
};
const obj2 = {
  ...obj,
  icon: 'home',
};
