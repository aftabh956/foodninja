import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import CustomButton from './CustomButton'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Ordercomponent = ({data,navigation,onPress,isRighticon,style}) => {
  const [count, setCount] = useState(0);
  return (
    <View style={[styles.box,style]}>

      <View style={styles.image_Style}>
      <Image style={{height:'100%', width:'100%'}} source={data.image}/>
      </View>
      <View>
       <Text style={{
         fontSize:moderateScale(15,0.6),
         color:colors.white
       }}>{data.menu_Name}</Text>
       <Text  style={{
         fontSize:moderateScale(14,0.6),
         color:'grey'
       }}>{data.rest_Name}</Text>
       <Text  style={{
         fontSize:moderateScale(19,0.6),
         color: data.button_text == 'Reorder' ? '#BEBEBE': colors.primary,top:moderateScale(3,0.6)
       }}>{data.price }</Text>
      </View>
      <View>
       {isRighticon ?
        <CustomButton onPress={onPress} style={{width:windowwidth *0.25,
         height:windowheight *0.037,borderRadius:moderateScale(15,0.6), backgroundColor: data.button_text=='Reorder'
         ? colors.white : colors.primary

       }} buttontext_Style={{fontSize:moderateScale(12,0.6),
         letterSpacing:2,  color:data.button_text=='Reorder' ? '#252525' : colors.white
       }} buttontext={data.button_text}/> :
       <View  style={styles.add_Order}>
       <TouchableOpacity onPress={() => {
        if (count > 0 && count < 1000) {
          setCount(count - 1);
        } 
      }} style={styles.decrease}>
       <AntDesign size={19} name={'minus'}/>
       </TouchableOpacity>
       <Text style={styles.count_Text} >{count}</Text>
       <TouchableOpacity onPress={() => {
        if ( count < 1 < 1000) {
          setCount(count + 1);
        } 
      }} style={styles.increase}>
       <Ionicons size={19} name={'add'}/>
       </TouchableOpacity>
       </View>
       }
      </View>
     </View>
  )
}

export default Ordercomponent

const styles = StyleSheet.create({
    
      box:{
      width:windowwidth *0.93,
      height:windowheight *0.14,
      backgroundColor:colors.lightgrey,
      borderRadius:moderateScale(15,0.6),
      paddingHorizontal:moderateScale(15,0.6),
      marginTop:moderateScale(15,0.6),
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      // bottom:20
      
      },
      image_Style:{
        width:windowwidth *0.17,
        height:windowheight *0.087,
        },
        decrease:{
        width:windowwidth*0.07,
        height:windowwidth*0.07,
        borderRadius:windowwidth *0.05/2,
        backgroundColor:'#26402f',
        alignItems:'center',
        justifyContent:'center'
        },
        add_Order:{
          width:windowwidth *0.24,
          height:windowheight *0.04,
          // backgroundColor:'red',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between'
        },
        increase:{
        width:windowwidth*0.07,
        height:windowwidth*0.07,
        borderRadius:windowwidth *0.05/2,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center'
        },
        count_Text:{
          fontSize:moderateScale(15,0.6),
          color:colors.white
        }
})