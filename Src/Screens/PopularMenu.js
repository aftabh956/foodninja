import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageContainer from '../Components/ImageContainer'
import Header from '../Components/Header'
import { moderateScale } from 'react-native-size-matters'

import { FlatList } from 'native-base'
import { colors } from '../Utils/theme'
import CartComponent from '../Components/CartComponent'

const PopularMenu = () => {
    const MenuList = [
        {
          id: 1,
          Photomenu: require('../Assets/Images/PhotoMenu1.png'),
          Menuname: 'Green Noddle',
          Restaurantname: 'Noodle Home',
          price: '$15',
        },
        {
          id: 2,
          Photomenu: require('../Assets/Images/PhotoMenu2.png'),
          Menuname: 'Herbal Pancake',
          Restaurantname: 'Warung Herbal',
          price: '$7',
        },
        {
            id: 3,
            Photomenu: require('../Assets/Images/PhotoMenu3.png'),
            Menuname: 'Fruit Salad',
            Restaurantname: 'Wijie Resto',
            price: '$5',
          },
    ]
  return (
    <ImageContainer isScroll={true} isImage2={true}>
     <Header />
     <View style={styles.main_View}>
     <Text
          style={{
            fontSize: moderateScale(15, 0.6),
            fontWeight: 'bold',
            color: colors.white,
          }}>
          Popular Menu
        </Text>
     <FlatList style={{marginTop:moderateScale(10,0.6)}}
          data={MenuList}
          renderItem={({item}) => {
            return <CartComponent isrighticon={true} data={item} />
          }}
        />
     </View>
    </ImageContainer>
  )
}

export default PopularMenu

const styles = StyleSheet.create({
    main_View:{
        paddingHorizontal:moderateScale(18,0.6)
    }
})