import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import { windowwidth } from '../Utils/theme';
import { moderateScale } from 'react-native-size-matters';
import ImageContainer from '../Components/ImageContainer';


const Homescreen = () => {
  return (
    <ImageContainer isImage2={true}>
    <Header/>
    <View style={styles.container}>
 
    </View>
    </ImageContainer>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
           container: {
        paddingHorizontal: moderateScale(20, 0.6),
        paddingVertical: moderateScale(25, 0.6),
      },
})
  
