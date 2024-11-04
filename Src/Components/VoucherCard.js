import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { colors, windowheight, windowwidth } from '../Utils/theme'

const VoucherCard = ({text,style,button_Style,image,image_Styling,card_Style}) => {
  return (
    <View style={[styles.promo_Card,card_Style]}>
      <View style={[styles.image_Style, image_Styling]}>
      <Image style={{height:'100%', width:'100%'}} source={image}/>
      </View>
      <View style={styles.voucher_Text}>
            <Text
              style={[{
                fontSize: moderateScale(18, 0.6),
                fontWeight: 'bold',
                color: colors.white,
              }, style]}>
              {text}
            </Text>
          </View>
          <TouchableOpacity style={styles.cta_Button}>
            <Text
              style={[{
                fontSize: moderateScale(11, 0.6),
                fontWeight: 'bold',
                color: colors.primary,
              }, button_Style]}>
              Order Now
            </Text>
          </TouchableOpacity>
          </View>
  )
}

export default VoucherCard

const styles = StyleSheet.create({
    promo_Card: {
        width: windowwidth * 0.90,
        height: windowheight * 0.18,
        borderRadius: moderateScale(15, 0.6),
        backgroundColor: colors.primary,
        // paddingHorizontal:moderateScale(20,0.6),
        alignSelf:'center',
        marginTop:moderateScale(20,0.6)
        // opacity:0.95
      },
      image_Style:{
        width:windowwidth *0.29,
        height:windowheight *0.18,
        // marginLeft:moderateScale(20,0.6),
        // backgroundColor:'red'
      },
      voucher_Text: {
        position: 'absolute',
        alignSelf: 'flex-end',
        width: windowwidth * 0.38,
        right: moderateScale(20, 0.6),
        marginTop: moderateScale(20, 0.6),
        // backgroundColor:'red'
      },
      cta_Button: {
        width: windowwidth * 0.26,
        height: moderateScale(35, 0.6),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(8, 0.6),
        alignSelf: 'flex-end',
        position: 'absolute',
        right: moderateScale(65, 0.6),
        marginTop: moderateScale(78, 0.6),
      },
})