import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageContainer from '../Components/ImageContainer'
import { moderateScale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors, windowheight, windowwidth } from '../Utils/theme';
import CustomButton from '../Components/CustomButton';
import { Image } from 'native-base';
const UploadPhoto = ({navigation}) => {
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
          <TouchableOpacity style={styles.gallery_Box}>
          <Image source={require('../Assets/Images/Gallery.png')}/>
          <Text style={{fontSize:moderateScale(14,0.6),
            fontWeight:'bold',color:colors.white,lineHeight:moderateScale(35,0.6)
          }}>From Gallery</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.gallery_Box}>
          <Image source={require('../Assets/Images/camera.png')}/>
          <Text style={{fontSize:moderateScale(14,0.6),
            fontWeight:'bold',color:colors.white,lineHeight:moderateScale(35,0.6)
          }}>Take Photo</Text>
          </TouchableOpacity>
          <View style={{height:windowheight*0.25}}>
          <CustomButton onPress={()=>{
            navigation.navigate('Photopreview')
          }} style={{position:'absolute',bottom:0}}
          buttontext={'Next'}/>
          </View>
          </View>
          
    </ImageContainer>
  )
}

export default UploadPhoto

const styles = StyleSheet.create({
  main_View: {
    paddingHorizontal: moderateScale(20, 0.6),
    // marginHorizontal:moderateScale(20,0.6),
    paddingVertical: moderateScale(30, 0.6),
    // alignItems:'center'
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
  gallery_Box:{
    width:windowwidth *0.89,
    height:windowwidth *0.34,
    backgroundColor:'#242322',
    borderRadius: moderateScale(12,0.6),
    alignItems:'center',
    justifyContent:'center',
    marginTop:moderateScale(20,0.6)
  }
})