import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageContainer from '../Components/ImageContainer';
import {moderateScale} from 'react-native-size-matters';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'native-base';
import CartComponent from '../Components/CartComponent';

const NotificationScreen = ({navigation}) => {
  const NotificationList = [
    {
      id: 1,
      Photomenu: require('../Assets/Images/notificationIcon1.png'),
      Menuname: 'Your order has been taken by the driver',
      Restaurantname: 'Recently',
      price: '20.00',
    },
    {
      id: 2,
      Photomenu: require('../Assets/Images/notificationIcon2.png'),
      Menuname: 'Topup for $100 was successful',
      Restaurantname: '10.00 Am',
      price: '20.00',
    },
    {
      id: 3,
      Photomenu: require('../Assets/Images/NotificationIcon3.png'),
      Menuname: 'Your order has been canceled',
      Restaurantname: '22 Juny 2021',
      price: '20.00',
    },
  ];
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
            Notification
          </Text>
        </View>
        <FlatList
          style={{marginTop: moderateScale(10, 0.6)}}
          data={NotificationList}
          renderItem={({item}) => {
            return <CartComponent main_view={{justifyContent:'flexstart'}} text_view_Style={{width:windowwidth *0.7,
              // paddingHorizontal:moderateScale(8,0.6)
            }} data={item} />;
            // <CartField image_Style={{width:moderateScale(50,0.6),height:moderateScale(50,0.6)}}
            //   data={item} />
          }}
        />
      </View>
    </ImageContainer>
  );
};

export default NotificationScreen;

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
    marginTop: moderateScale(10, 0.6),
  },
});
