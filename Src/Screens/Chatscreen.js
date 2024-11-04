import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageContainer from '../Components/ImageContainer';
import {moderateScale} from 'react-native-size-matters';
import {colors, windowwidth} from '../Utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'native-base';
import CustomTextField from '../Components/CustomTextField';
import CartComponent from '../Components/CartComponent';

const Chatscreen = ({navigation}) => {
  const ChatList = [
    {
      id: 1,
      Photomenu: require('../Assets/Images/riderPhoto1.png'),
      Menuname: 'Anamwp',
      Restaurantname: 'Your Order Just Arrived!',
      price: '20.00',
    },
    {
      id: 2,
      Photomenu: require('../Assets/Images/riderPhoto2.png'),
      Menuname: 'Guy Hawkins',
      Restaurantname: 'Your Order Just Arrived!',
      price: '20.00',
    },
    {
      id: 3,
      Photomenu: require('../Assets/Images/riderPhoto3.png'),
      Menuname: 'Leslie Alexander',
      Restaurantname: 'Your Order Just Arrived!',
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
            Chat
          </Text>
        </View>
        <FlatList
          data={ChatList}
          renderItem={({item}) => {
            return (
              <CartComponent onPressItem={()=>{
                navigation.navigate('Chatdetails')
              }} isrighticon={true} chat_Style={true} time_Style={true} data={item} />
            );
          }}
        />
         
      </View>
    </ImageContainer>
  );
};

export default Chatscreen;

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
