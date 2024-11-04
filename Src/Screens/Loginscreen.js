import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageContainer from '../Components/ImageContainer';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';
import CustomTextField from '../Components/CustomTextField';


const Loginscreen = ({navigation}) => {
  return (
    <ImageContainer>
      <View style={styles.logoImage}>
        <Image
          style={{resizeMode: 'contain'}}
          source={require('../Assets/Images/Logo.png')}
        />
      </View>

      <View style={{marginTop: moderateScale(80, 0.6)}}>
        <View style={styles.form}>
          <TextInput
            style={{marginLeft: moderateScale(20, 0.6)}}
            placeholderTextColor={'grey'}
            placeholder="Email"
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={{marginLeft: moderateScale(20, 0.6)}}
            placeholderTextColor={'grey'}
            placeholder="Password"
          />
        </View>
      </View>
      <View style={{marginTop: moderateScale(15, 0.6)}}>
        <Text
          style={{
            color: colors.white,
            fontSize: moderateScale(12, 0.6),
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Or Continue With
        </Text>
        
      </View>
      {/* <CustomTextField isIconImage={true} iconName={'user-alt'} input_Style={{marginLeft:moderateScale(10,0.6)}} 
      isRight_icon={true} placeholder={'Email'}/> */}
      <View style={styles.buttonView}>
        <CustomButton
          buttontext={'Facebook'}
          style={{
            width: windowwidth * 0.40,
            height: windowheight * 0.08,
            backgroundColor: '#242322',
          }}
          isRowBtn={true}
          iconName={require('../Assets/Images/facebook.png')}
          imageStyle={{
            width: moderateScale(25, 0.6),
            height: moderateScale(25, 0.6),
          }}
        />
        <CustomButton
          buttontext={'Google'}
          style={{
            width: windowwidth * 0.40,
            height: windowheight * 0.08,
            backgroundColor: '#242322',
          }}
          isRowBtn={true}
          iconName={require('../Assets/Images/google-icon.png')}
          imageStyle={{
            width: moderateScale(25, 0.6),
            height: moderateScale(25, 0.6),
          }}
        />
      </View>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Viamethod')
      }} style={{alignSelf:'center',borderBottomWidth:1,
        borderBottomColor: colors.primary
      }}>
        <Text style={{fontSize:moderateScale(12,0.6),
          color: colors.primary
        }}>Forgot Your Password?</Text>
      </TouchableOpacity>
      <View style={{marginTop:moderateScale(35,0.6)}}>
      <CustomButton onPress={()=>{
        navigation.navigate('Tabnavigation')
      }}
       buttontext={'Login'}/>
      </View>
    
      </ImageContainer>
  
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  logoImage: {
    alignSelf: 'center',
    marginTop: moderateScale(35, 0.6),
  },
  form: {
    width: windowwidth * 0.89,
    height: moderateScale(50, 0.6),
    // height:windowheight *0.1,
    backgroundColor: '#242322',
    alignSelf: 'center',
    borderRadius: moderateScale(15, 0.6),
    marginTop: moderateScale(15, 0.6),
  },
  buttonView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:moderateScale(20,0.6),
    paddingVertical:moderateScale(20,0.6)
    // alignSelf:'center'
  }
});
