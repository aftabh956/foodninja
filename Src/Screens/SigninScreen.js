import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageContainer from '../Components/ImageContainer';
import {moderateScale} from 'react-native-size-matters';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import CustomTextField from '../Components/CustomTextField';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CustomButton from '../Components/CustomButton';

const SigninScreen = ({navigation}) => {
  return (
    <ImageContainer>
        <ScrollView >
        <View style={styles.container}>
          <Image source={require('../Assets/Images/Logo.png')} />
          <View style={styles.signup_text}>
            <Text
              style={{
                fontSize: moderateScale(20, 0.6),
                color: colors.white,
                fontWeight: 'bold',
              }}>
              Sign Up For Free
            </Text>
          </View>
          <View style={styles.form}>
            <CustomTextField
              isIconImage={true}
              iconName={'user-alt'}
              input_Style={{marginLeft: moderateScale(17, 0.6)}}
              placeholder={'User Name'}
            />
            <CustomTextField
              isIconImage={true}
              iconName={'envelope'}
              input_Style={{marginLeft: moderateScale(17, 0.6)}}
              placeholder={'Email'}
            />
            <CustomTextField
              isIconImage={true}
              iconName={'locked'}
              icon_Type={Fontisto}
              placeholder={'Password'}
              input_Style={{marginLeft: moderateScale(17, 0.6)}}
              show_Password={true}
              isRight_icon={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
              marginTop: moderateScale(15, 0.6),
            }}>
            <View style={styles.tick_Circle}>
              <Feather size={15} style={{color: colors.white}} name={'check'} />
            </View>
            <Text
              style={{
                fontSize: moderateScale(12, 0.6),
                fontWeight: '400',
                color: 'grey',
                paddingLeft: moderateScale(12, 0.6),
              }}>
              Keep Me Signed In
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
              marginTop: moderateScale(10, 0.6),
            }}>
            <View style={styles.tick_Circle}>
              <Feather size={15} style={{color: colors.white}} name={'check'} />
            </View>
            <Text
              style={{
                fontSize: moderateScale(12, 0.6),
                fontWeight: '400',
                color: 'grey',
                paddingLeft: moderateScale(12, 0.6),
              }}>
              Email Me About Special Pricing
            </Text>
          </View>
          <CustomButton onPress={()=>{
            navigation.navigate('SignupProcess')
          }}
            style={{
              width: windowwidth * 0.43,
              marginTop: moderateScale(40, 0.6),
            }}
            buttontext={'Create Account'}
          />
          <TouchableOpacity onPress={()=>{
          navigation.navigate('Loginscreen')
          }}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.primary,
              marginTop: moderateScale(10, 0.6),
              // marginBottom:moderateScale(10,0.6)
            }}>
            <Text
              style={{
                fontSize: moderateScale(12, 0.6),
                color: colors.primary,
                fontWeight: '500',
              }}>
              already have an account?
            </Text>         
          </TouchableOpacity>
        </View>
    </ScrollView>
      </ImageContainer>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(22, 0.6),
    paddingVertical: moderateScale(30, 0.6),

    alignItems: 'center',

    // backgroundColor:'green'
  },
  signup_text: {
    marginTop: moderateScale(60, 0.6),
  },
  form: {
    marginTop: moderateScale(40, 0.6),
  },
  text_Style: {
    alignSelf: 'flex-start',
  },
  tick_Circle: {
    width: windowwidth * 0.057,
    height: windowwidth * 0.057,
    borderRadius: (windowwidth * 0.2) / 2,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
