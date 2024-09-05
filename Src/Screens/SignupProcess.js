import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageContainer from '../Components/ImageContainer';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import CustomTextField from '../Components/CustomTextField';
import CustomButton from '../Components/CustomButton';

const SignupProcess = ({navigation}) => {
  return (
    <ImageContainer isImage2={true}>
      <View style={styles.main_View}>
        <TouchableOpacity onPress={()=>{
            navigation.goBack()
        }} style={styles.arrow_Back}>
          <AntDesign style={{color: colors.orange}} size={20} name={'left'} />
        </TouchableOpacity>
        <View style={styles.main_Text}>
          <Text
            style={{
              fontSize: moderateScale(25, 0.6),
              fontWeight: 'bold',
              color: colors.white,
            }}>
            Fill in your bio to get started
          </Text>
          </View>
          <View style={styles.sub_heading}>
          <Text
            style={{
              fontSize: moderateScale(12, 0.6),
              fontWeight: '400',
              color: 'grey',
              lineHeight:moderateScale(20,0.3),
            }}>
            This data will be displayed in your account profile for security
          </Text>
          </View>
          <View style={{marginTop:moderateScale(15,0.6)}}>
          <CustomTextField style={{width:windowwidth*0.95}} placeholder={'First Name'}/>
          <CustomTextField style={{width:windowwidth*0.95}} placeholder={'Last Name'}/>
          <CustomTextField style={{width:windowwidth*0.95}} placeholder={'Mobile Number'}/>
          </View>
          <View style={{height:windowheight *0.34}}>
            <CustomButton onPress={()=>{
                navigation.navigate('PaymentScreen')
            }} style={{position:'absolute',bottom:0}} buttontext={'Next'}/>
          </View>
      </View>
    </ImageContainer>
  );
};

export default SignupProcess;

const styles = StyleSheet.create({
  main_View: {
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(30, 0.6),
    // alignItems: 'center',
  },
  arrow_Back: {
    width: windowwidth * 0.11,
    height: windowwidth * 0.11,
    borderRadius: (windowwidth * 0.06) / 2,
    backgroundColor: '#1f1109',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_Text: {
    width: windowwidth * 0.8,
    marginTop: moderateScale(20, 0.6),
  },
  sub_heading:{
    width: windowwidth *0.7,
    marginTop:moderateScale(20,0.6),
    
    // backgroundColor:'green'
  }
});
