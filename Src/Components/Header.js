import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageContainer from '../Components/ImageContainer';
import {moderateScale} from 'react-native-size-matters';
import { colors, windowwidth } from '../Utils/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { Image } from 'native-base';

const Header = ({style,isRighticon}) => {
  return (
    
      <View style={styles.main_View}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={styles.title_text}>
          <Text style={{color:colors.white,
            fontSize:moderateScale(31,0.6),
            fontWeight:'bold',lineHeight:42
          }}>Find Your Favorite Food</Text>
        </View>
        <TouchableOpacity style={styles.notification_Icon}>
         <MaterialIcons style={{color:colors.primary}} size={24} name={'notifications'}/>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',marginTop:moderateScale(17,0.6)}}>
        <View style={[styles.search_Box,style]}>
            <AntDesign size={22} style={{color:colors.white}} name={'search1'}/>
            <TextInput style={{marginLeft:moderateScale(10,0.6),
                fontSize:moderateScale(12,0.6),
            }} placeholder='What do you want to order?' placeholderTextColor={'grey'}></TextInput>
            
        </View>
        { ! isRighticon && 
            <TouchableOpacity style={styles.filter_Box}>
        <Image source={require('../Assets/Images/Filter.png')}/>
        </TouchableOpacity>}
        </View>
      </View>
     
  )
}

export default Header

const styles = StyleSheet.create({
    main_View: {
        paddingHorizontal: moderateScale(20, 0.6),
        paddingVertical: moderateScale(25, 0.6),
      },
      title_text:{
        width:windowwidth *0.69,
      },
      notification_Icon:{
         width:windowwidth *0.099,
         height:windowwidth *0.099,
         borderRadius:moderateScale(10,0.6), 
         backgroundColor: colors.lightgrey,
         alignItems:'center',
         justifyContent:'center',
         },
         search_Box:{
            width:windowwidth *0.69,
            height:moderateScale(46,0.6),
            backgroundColor:colors.lightgrey,
            borderRadius:moderateScale(15,0.6),
            flexDirection:'row',alignItems:'center',
            paddingHorizontal:moderateScale(18,0.6)
            
         },
         filter_Box:{
         width:windowwidth *0.12,
         height:windowwidth *0.12,
         borderRadius:moderateScale(10,0.6), 
         backgroundColor: colors.lightgrey,
         alignItems:'center',
         justifyContent:'center',
         marginLeft:moderateScale(12,0.6)
         }
})