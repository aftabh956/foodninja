import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageContainer from '../Components/ImageContainer'
import Header from '../Components/Header'
import { moderateScale } from 'react-native-size-matters'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import CustomButton from '../Components/CustomButton'
import { FlatList, ScrollView } from 'native-base'
import { background, color } from 'native-base/lib/typescript/theme/styled-system'
import Ordercomponent from '../Components/Ordercomponent'

const Cartscreen = ({navigation}) => {
  const Cartbox  = [
    {
      id:1,
      image: require('../Assets/Images/MenuPhoto6.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
      button_text: 'Process'
    },
    {
      id:2,
      image: require('../Assets/Images/MenuPhoto7.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
      button_text: 'Process'
    },
    {
      id:3,
      image: require('../Assets/Images/MenuPhoto8.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
      button_text: 'Reorder'
    },
    {
      id:4,
      image: require('../Assets/Images/MenuPhoto9.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
      button_text: 'Reorder'
    },
    {
      id:5,
      image: require('../Assets/Images/MenuPhoto9.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
      button_text: 'Reorder'
    }
  ]
  return (
   
   <ImageContainer isImage2={true}>
<ScrollView>
    <Header/>
    
    <FlatList style={styles.view_Styling}
    data={Cartbox}
    // showsVerticalScrollIndicator={false}
    renderItem={({item})=>{
    return (
      <Ordercomponent isRighticon={true} onPress={()=>{
        navigation.navigate('Orderdetails')
      }} data={item}/>
    )
    }}
    />
 </ScrollView>
   
   </ImageContainer>
   
  )
}

export default Cartscreen

const styles = StyleSheet.create({
  view_Styling:{
    paddingHorizontal:moderateScale(12,0.6),

  },
})