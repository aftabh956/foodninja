import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';
import ImageContainer from '../Components/ImageContainer';
import {FlatList, Image} from 'native-base';
import RestaurantCard from '../Components/RestaurantCard';
import DetailProduct from './DetailProduct';
import CartComponent from '../Components/CartComponent';

const Homescreen = ({navigation}) => {
  const RestaurantList = [
    {
      id: 1,
      Image: require('../Assets/Images/RestoImage1.png'),
      resto_Text: 'Vegan Resto',
      resto_Distance: '12 Mins',
    },
    {
      id: 2,
      Image: require('../Assets/Images/RestoImage2.png'),
      resto_Text: 'Healthy Food',
      resto_Distance: '8 Mins',
    },
    {
      id: 3,
      Image: require('../Assets/Images/RestoImage3.png'),
      resto_Text: 'Good Food',
      resto_Distance: '12 Mins',
    },
  ];
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
  ];
  return (
    <ImageContainer isScroll={true} isImage2={true}>
      
      <Header 
      onPressNotification={()=>{
        navigation.navigate('NotificationScreen')
      }}
      onPressItem={()=>{
        navigation.navigate('Filterscreen')
      }}/>
  
      <View style={styles.container}>
        <View style={styles.promo_Card}>
          <View style={styles.bgc_Image}>
          <Image style={{width: '100%', height:'100%'}} source={require('../Assets/Images/cardpattern.png')} />
          </View>
          <View style={styles.main_Image}>
          <Image
            style={{ width:'100%',height:'100%',}}
            source={require('../Assets/Images/Icecream.png')}
          />
          </View>
          <View style={styles.voucher_Text}>
            <Text
              style={{
                fontSize: moderateScale(17, 0.6),
                fontWeight: 'bold',
                color: colors.black,
              }}>
              Special Deal For October
            </Text>
          </View>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('VoucherPromo')
          }} style={styles.cta_Button}>
            <Text
              style={{
                fontSize: moderateScale(11, 0.6),
                fontWeight: 'bold',
                color: colors.primary,
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: moderateScale(15, 0.6),
          }}>
          <Text
            style={{
              fontSize: moderateScale(15, 0.6),
              fontWeight: 'bold',
              color: colors.white,
            }}>
            Nearest Restaurant
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NearestRestaurant');
            }}>
            <Text
              style={{
                fontSize: moderateScale(12, 0.6),
                color: colors.orange,
                marginRight: moderateScale(10, 0.6),
              }}>
              View More
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={RestaurantList}
          renderItem={({item}) => {
            return <RestaurantCard data={item} onPressItem={()=>{
              navigation.navigate('DetailProduct')
            }} />;
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: moderateScale(15, 0.6),
          }}>
          <Text
            style={{
              fontSize: moderateScale(15, 0.6),
              fontWeight: 'bold',
              color: colors.white,
            }}>
            Popular Menu
          </Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('PopularMenu')
          }}>
            <Text
              style={{
                fontSize: moderateScale(12, 0.6),
                color: colors.orange,
                marginRight: moderateScale(10, 0.6),
              }}>
              View More
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={MenuList}
          renderItem={({item}) => {
            return <CartComponent isrighticon={true} data={item} onPressItem={()=>{
            navigation.navigate('DetailMenu')
            }} />
          }}
        />
      </View>
    </ImageContainer>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20, 0.6),
 
  },
  promo_Card: {
    width: windowwidth * 0.86,
    height: windowheight * 0.198,
    borderRadius: moderateScale(15, 0.6),
    backgroundColor: colors.primary,
    // opacity:0.95
  },
  bgc_Image:{
    width:windowwidth *0.86 ,
    height:windowheight *0.2,
    // backgroundColor:'red'
  },
  main_Image:{
    height:moderateScale(140,0.6),
    width:moderateScale(250,0.6),
    position:'absolute',
   
  },
  voucher_Text: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: windowwidth * 0.35,
    right: moderateScale(20, 0.6),
    marginTop: moderateScale(20, 0.6),
  },
  cta_Button: {
    width: windowwidth * 0.23,
    height: moderateScale(35, 0.6),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8, 0.6),
    alignSelf: 'flex-end',
    position: 'absolute',
    right: moderateScale(65, 0.6),
    marginTop: moderateScale(78, 0.6),
  },
});
