import { ImageComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageContainer from '../Components/ImageContainer'
import { moderateScale } from 'react-native-size-matters'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomTextField from '../Components/CustomTextField'
import CustomButton from '../Components/CustomButton'


const Setpassword = ({navigation}) => {
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
            Reset your password here
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
        <View style={{marginTop:moderateScale(25,0.6)}}>
        <CustomTextField
              placeholder={'New Password'}
              isRight_icon={true}
              style={{width:windowwidth *0.95}}
              />
              <CustomTextField
              placeholder={'Confirm Password'}
              isRight_icon={true}
              style={{width:windowwidth *0.95}}
              show_Password={true}
            />
            </View>
            <View style={{height:windowheight *0.43}}>
        <CustomButton onPress={()=>{
          navigation.navigate('Resetcomplete')
        }} style={{position:'absolute',
          bottom:0
        }} buttontext={'Next'}/>
        </View>
    </View>
    
    </ImageContainer>
  )
}

export default Setpassword

const styles = StyleSheet.create({
    main_View: {
        paddingHorizontal: moderateScale(15, 0.6),
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
        width: windowwidth * 0.8,
        marginTop: moderateScale(20, 0.6),
        paddingHorizontal:moderateScale(4,0.6)
      },
      sub_heading: {
        width: windowwidth * 0.7,
        marginTop: moderateScale(15, 0.6),
        paddingHorizontal:moderateScale(4,0.6)
      },
})