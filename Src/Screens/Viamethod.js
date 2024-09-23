import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageContainer from '../Components/ImageContainer';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import CustomButton from '../Components/CustomButton';
import {Image} from 'native-base';

const Viamethod = ({navigation}) => {
  return (
    <ImageContainer isImage2={true}>
      <View style={styles.main_View}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.arrow_Back}>
          <AntDesign style={{color: colors.orange}} size={20} name={'left'} />
        </TouchableOpacity>
        <View style={styles.main_Text}>
          <Text
            style={{
              fontSize: moderateScale(25, 0.6),
              fontWeight: 'bold',
              color: colors.white,
            }}>
            Forgot password?
          </Text>
        </View>
        <View style={styles.sub_heading}>
          <Text
            style={{
              fontSize: moderateScale(12, 0.6),
              fontWeight: '400',
              color: 'grey',
              lineHeight: moderateScale(20, 0.3),
            }}>
            Select which contact details should we use to reset your password
          </Text>
        </View>
        <TouchableOpacity>
        <View style={styles.sms_Box}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginTop:moderateScale(10,0.6)}} >
              <Image source={require('../Assets/Images/sms.png')} />
            </View>
            <View
              style={{
                marginLeft: moderateScale(15, 0.6),
                marginTop:moderateScale(5,0.6)
                
              
              }}>
              <Text
                style={{fontSize: moderateScale(16, 0.6), color: '#828282'}}>
                Via sms:
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(16, 0.6),
                  color: colors.white,
                  lineHeight: moderateScale(30, 0.6),
                  letterSpacing: moderateScale(4, 0.3),
                }}>
                **** **** 4235
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={[styles.sms_Box]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginTop:moderateScale(10,0.6)}}>
              <Image source={require('../Assets/Images/sms.png')} />
            </View>

            <View
              style={{
                marginLeft: moderateScale(15, 0.6),
                paddingTop:moderateScale(5,0.6)
             
              }}>
              <Text
                style={{fontSize: moderateScale(16, 0.6), color: '#828282'}}>
                Via email:
              </Text>
              <Text
              style={{
                fontSize: moderateScale(16, 0.6),
                color: colors.white,
                lineHeight: moderateScale(30, 0.6),
                letterSpacing: moderateScale(2.5, 0.3)
               
              }}>
              **** @gmail.com
            </Text>

          </View>
            </View>
          </View>
          </TouchableOpacity>
          <View style={{height:windowheight *0.36}}>
        <CustomButton onPress={()=>{
          navigation.navigate('Varification')
        }} style={{position:'absolute',
          bottom:0
        }} buttontext={'Next'}/>
        </View>
        </View>
      
    </ImageContainer>
  );
};

export default Viamethod;

const styles = StyleSheet.create({
  main_View: {
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(30, 0.6),
    // backgroundColor:'red'
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
    paddingHorizontal:moderateScale(4,0.6)
  },
  sub_heading: {
    width: windowwidth * 0.6,
    marginTop: moderateScale(20, 0.6),
    paddingHorizontal:moderateScale(4,0.6)
  },
  sms_Box: {
    width: windowwidth * 0.91,

    backgroundColor: '#242322',
    borderRadius: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(20, 0.6),
   paddingVertical:moderateScale(20,0.6),
    marginTop: moderateScale(20, 0.6),
    // marginTop:moderateScale(15,0.6),
    // flexDirection:'row'
  },
});
