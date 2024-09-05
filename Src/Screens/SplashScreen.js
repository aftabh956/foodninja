import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {colors, Colors} from '../Utils/theme';
import Onboarding1 from './Onboarding1';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SplashScreen = ({navigation}) => {
  //built function ha javascript ka
  // used to when we want to do some work for short time
  setTimeout(() => {
    navigation.navigate('OnBoarding');
  }, 3000);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          height: '100%',
        }}
        source={require('../Assets/Images/Background1.png')}>
        <View style={{alignSelf: 'center', marginTop: moderateScale(245, 0.6)}}>
          <Image source={require('../Assets/Images/Logo.png')} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: colors.black,
  },
});
