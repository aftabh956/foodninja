import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import { moderateScale } from 'react-native-size-matters'
import ImageContainer from '../Components/ImageContainer'
import AntDesign from 'react-native-vector-icons/AntDesign';
import VoucherCard from '../Components/VoucherCard'
import { border, color, position } from 'native-base/lib/typescript/theme/styled-system'
import CustomButton from '../Components/CustomButton'

const VoucherPromo = ({navigation}) => {
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
            Voucher Promo
          </Text>
        </View>
        <VoucherCard image_Styling={{marginLeft:moderateScale(30,0.6)}} image={require('../Assets/Images/VoucherImage1.png')} text={'Special Deal For October'}/>
        <VoucherCard image={require('../Assets/Images/VoucherImage2.png')} 
        card_Style={{backgroundColor:'#E9F7BA'}}
        image_Styling={{width:windowwidth *0.8}}
        text={'Special Deal For October'} style={{color:colors.purple}}
        button_Style={{color:colors.purple}}/>
    
          </View>
          <View style={{position:'absolute',bottom:moderateScale(30,0.6),alignSelf:'center'}} >
          <CustomButton style={{width:windowwidth *0.90}} buttontext={'Check out'}/>
          </View>
        </ImageContainer>
  )
}

export default VoucherPromo

const styles = StyleSheet.create({
  
  main_View: {
    paddingHorizontal: moderateScale(20, 0.6),
    paddingVertical: moderateScale(30, 0.6),
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
    marginTop: moderateScale(20, 0.6),
  },
  
  // bgc_Image:{
  //   width:windowwidth *0.86 ,
  //   height:windowheight *0.2,
  //   // backgroundColor:'red'
  // },
  // ain_Image:{
  //   height:moderateScale(140,0.6),
  //   width:moderateScale(250,0.6),
  //   position:'absolute',
  //  },
  //  voucher_Text: {
  //   position: 'absolute',
  //   alignSelf: 'flex-end',
  //   width: windowwidth * 0.35,
  //   right: moderateScale(20, 0.6),
  //   marginTop: moderateScale(20, 0.6),
  // },
  // cta_Button: {
  //   width: windowwidth * 0.23,
  //   height: moderateScale(35, 0.6),
  //   backgroundColor: colors.white,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: moderateScale(8, 0.6),
  //   alignSelf: 'flex-end',
  //   position: 'absolute',
  //   right: moderateScale(65, 0.6),
  //   marginTop: moderateScale(78, 0.6),
  // },
})