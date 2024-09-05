import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageContainer from '../Components/ImageContainer'
import { moderateScale } from 'react-native-size-matters'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Image } from 'native-base'
import CustomButton from '../Components/CustomButton'
import { position } from 'native-base/lib/typescript/theme/styled-system'

const Photopreview = ({navigation}) => {
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
            Upload Your Photo Profile
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
          <View style={styles.photo_Box}>
            <Image style={{height:'100%',width:'100%',borderRadius: moderateScale(12,0.6),
                resizeMode:'cover'
            }} source={require('../Assets/Images/Photo.png')}/>
          </View>
          <View style={{height:windowheight *0.34}}>
          <CustomButton onPress={()=>{
            navigation.navigate('Location')
          }} style={{position:'absolute',bottom:0}}
          buttontext={'Next'}
          />
          </View>
          
     </View>
    </ImageContainer>
  )
}

export default Photopreview

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
        width: windowwidth * 0.6,
        marginTop: moderateScale(20, 0.6),
      },
      sub_heading:{
        width: windowwidth *0.7,
        marginTop:moderateScale(20,0.6),
      },
      photo_Box:{
        width:windowwidth *0.55,
        height:windowwidth *0.46,
        // backgroundColor:'red',
        borderRadius: moderateScale(12,0.6),
        // position:'absolute'
        alignSelf:'center',
        marginTop:moderateScale(60,0.6)
      }
})