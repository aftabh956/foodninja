import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageContainer from '../Components/ImageContainer'
import { moderateScale } from 'react-native-size-matters'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../Components/CustomButton'

const PaymentScreen = ({navigation}) => {
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
            Payment Method
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
          <View style={{marginVertical:moderateScale(15,0.6)}}>
          <CustomButton style={{width:windowwidth*0.93,height:windowheight*0.09,
            backgroundColor: '#242322'
          }} 
          isSvgbutton={true} imageIcon={require('../Assets/Images/paypal.png')}
          />
          <CustomButton style={{width:windowwidth*0.93,height:windowheight*0.09,
            backgroundColor: '#242322'
          }} 
          isSvgbutton={true} imageIcon={require('../Assets/Images/visa.png')}
          />
          <CustomButton style={{width:windowwidth*0.93,height:windowheight*0.09,
            backgroundColor: '#242322'
          }} 
          isSvgbutton={true} imageIcon={require('../Assets/Images/Payoneer.png')}
          />
          </View>
          <View style={{height:windowheight*0.32}}>
          <CustomButton onPress={()=>{
            navigation.navigate('UploadPhoto')
          }} style={{position:'absolute',bottom:0}}
          buttontext={'Next'}/>
          </View>
    </View>
    </ImageContainer>
  )
}

export default PaymentScreen

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
      }
})