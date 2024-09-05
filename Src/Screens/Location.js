import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageContainer from '../Components/ImageContainer'
import { moderateScale } from 'react-native-size-matters'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import CustomButton from '../Components/CustomButton'

const Location = ({navigation}) => {
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
            Set Your Location
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
          
          <View style={styles.location_Box}>
          <View style={{flexDirection:'row',alignItems:'center',
          marginTop:moderateScale(15,0.6)
          }}>
          <View style={styles.location_Icon}>
          <Entypo style={{color: colors.orange}} size={25} name={'location-pin'}/>
          </View>
          <Text style={{fontSize:moderateScale(15,0.6),
            color:colors.white,marginLeft:moderateScale(15,0.6)
          }}>Your Location</Text>
          </View>
          <TouchableOpacity style={styles.location_Button}>
          <Text style={{fontSize:moderateScale(14,0.6),
            color:colors.white
          }}>Set Location</Text>
          </TouchableOpacity>
          </View>
          <View style={{height:windowheight *0.49}}>
          <CustomButton onPress={()=>{
            navigation.navigate('Signupcomplete')
          }} style={{position:'absolute',bottom:0}}
          buttontext={'Next'}
          />
          </View>
     </View>
    </ImageContainer>
  )
}

export default Location

const styles = StyleSheet.create({
    main_View:{
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
      location_Box:{
        width:windowwidth *0.89,
        height:windowwidth *0.35,
        backgroundColor:'#242322',
        borderRadius: moderateScale(12,0.6),
        marginTop:moderateScale(20,0.6),
        paddingHorizontal:moderateScale(15,0.6),
        // paddingVertical:moderateScale(14,0.6)
        
      },
      location_Icon:{
        width:windowwidth *0.09,
        height:windowwidth *0.09,
        borderRadius:windowwidth *0.09/2,
        backgroundColor:'#FFE14D',
        alignItems:'center',
        justifyContent:'center'
      },
      location_Button:{
        width:windowwidth *0.81,
        height:windowwidth *0.12,
        backgroundColor:'#383838',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: moderateScale(12,0.6),
        marginVertical:moderateScale(25,0.6)

      }
})