import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import { FlatList, Image, ScrollView } from 'native-base'
import { moderateScale } from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { color } from 'native-base/lib/typescript/theme/styled-system'
import CartComponent from '../Components/CartComponent'
import Ordercomponent from '../Components/Ordercomponent'


const Profile = () => {
  const [itemDetail, setitemDetail] = useState(false)
  const Cartbox  = [
    {
      id:1,
      image: require('../Assets/Images/MenuPhoto6.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
      button_text: 'Buy Again'
    },
    {
      id:2,
      image: require('../Assets/Images/MenuPhoto10.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
      button_text: 'Buy Again'
    },
    {
      id:3,
      image: require('../Assets/Images/Photomenu11.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
      button_text: 'Buy Again'
    },
  ]
  return (
    <SafeAreaView>
      <View style={{height: windowheight * 0.52}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../Assets/Images/PhotoProfile.png')}
        />
      </View>
      <TouchableOpacity activeOpacity={1} style={[styles.frame_Box, {height:itemDetail ? windowheight  : windowheight *0.7,
        marginTop:itemDetail ? moderateScale(-315,0.6) : -120
      }]} onPress={()=>{
        setitemDetail(!itemDetail)
      }}>
       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:moderateScale(160,0.6)}}>
        <View style={styles.box_Style}>
        <View style={styles.scroll_Tool}></View>
        <View style={styles.gold_Button}>
     <Text style={{fontSize:moderateScale(12,0.6),
      color:colors.yellow,fontWeight:'bold'
     }}>Member Gold</Text>
        </View>
        <View style={styles.main_Text}>
          <Text style={{fontSize:moderateScale(27,0.6),
      color:colors.white,fontWeight:'bold',width:windowwidth*0.80
     }}>Anam Wusono</Text>
     <FontAwesome5 style={{color:colors.primary}} size={20} name='pen'/>
        </View>
        <Text style={{fontSize:moderateScale(14,0.6)}}>anamwp66@gmail.com</Text>
        <View style={styles.voucher_Box}>
        <View style={styles.voucher_Icon}>
       <Image style={{height:'100%',width:'100%'}} source={require('../Assets/Images/Vouchericon.png')}/>
        </View>
        <Text style={{fontSize:moderateScale(15,0.6),
          color:colors.white,marginLeft:moderateScale(20,0.6)
        }}>You Have 3 Voucher</Text>
        </View>
        <View style={styles.text}>
        <Text style={{fontSize:moderateScale(15,0.6),
          color:colors.white,fontWeight:'bold'}}>Favorite</Text>
        </View>
        <FlatList 
    data={Cartbox}
    // showsVerticalScrollIndicator={false}
    renderItem={({item})=>{
    return (
      <Ordercomponent style={{width:windowwidth*0.94}} isRighticon={true} data={item}/>
    )
    }}
    />
        </View>
        
       </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  frame_Box: {
    width: windowwidth,
    
    backgroundColor: '#0E1110',
    borderRadius: moderateScale(29, 0.6),
   
    // marginBottom: moderateScale(100, 0.6),
  },
  box_Style: {
    alignSelf:'center'
  },
  scroll_Tool: {
    height: moderateScale(3, 0.6),
    width: moderateScale(50, 0.6),
    borderRadius: moderateScale(10, 0.6),
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginTop: moderateScale(10, 0.6),
  },
  gold_Button: {
    height: moderateScale(32, 0.6),
    width: windowwidth * 0.30,
    backgroundColor: 'rgba(254, 173, 29, 0.1)',
    borderRadius: moderateScale(15, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:moderateScale(25,0.6)
  },
  main_Text:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:moderateScale(20,0.6)
  },
  voucher_Box:{
    height:windowheight *0.08,
    width:windowwidth *0.94,
    backgroundColor:colors.lightgrey,
    borderRadius:moderateScale(15,0.6),
    // alignSelf:'center',
    alignItems:'center',
    // justifyContent:'center',
    paddingHorizontal:moderateScale(20,0.6),
    flexDirection:'row',
    marginTop:moderateScale(15,0.6)
  },
  voucher_Icon:{
    width:moderateScale(40,0.6),
    height:moderateScale(40,0.6),
    // backgroundColor:'red',
    
  },
  text:{
    marginTop:moderateScale(10,0.6),
    marginLeft:moderateScale(15,0.6)
  },
  view_Styling:{
    paddingHorizontal:moderateScale(12,0.6),
    // backgroundColor:'red',
    // paddingBottom:moderateScale(-100,0.6)
  },
})