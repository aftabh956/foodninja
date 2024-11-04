import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors, Colors, windowheight, windowwidth} from '../Utils/theme';
import { ScrollView } from 'native-base';
import { moderateScale } from 'react-native-size-matters';

const ImageContainer = ({children, isImage2, isScroll}) => {
  return (
  //  <ScrollView>

    <View style={styles.container}>

      <ImageBackground
        style={{minHeight:'100%'}} //yeh puri screen ka style ha 
        imageStyle={
          isImage2
          ? {height: '27%', width: '100%', opacity: 0.07}
            : {height: '100%'}
        } // yeh sirf image ka style ha.
        source={
          isImage2
            ? require('../Assets/Images/Background2.png')
            : require('../Assets/Images/Background1.png')
        }>
     { isScroll ?  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:moderateScale(30,0.6)}}>
      {children}
        </ScrollView> : children }
      </ImageBackground>

    </View>
    // </ScrollView>
    
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  container: {
    height: windowheight,
    width: windowwidth,
    backgroundColor: colors.black,
    
  },
});
