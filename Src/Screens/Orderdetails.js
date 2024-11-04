import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageContainer from '../Components/ImageContainer';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import { FlatList } from 'native-base';
import Ordercomponent from '../Components/Ordercomponent';
import { SwipeListView } from 'react-native-swipe-list-view';
import Amountcomponent from '../Components/Amountcomponent';

const Orderdetails = () => {
  const navigation = useNavigation();
  const cartboxlist = [
    {
      id: 1,
      image: require('../Assets/Images/MenuPhoto10.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
    },
    {
      id: 2,
      image: require('../Assets/Images/MenuPhoto6.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
    },
    {
      id: 3,
      image: require('../Assets/Images/MenuPhoto11.png'),
      menu_Name: 'Spacy fresh crab',
      rest_Name: 'Waroenk kita',
      price: '$ 35',
    },
  ];
  return (
    <ImageContainer isImage2={true}>
      <View style={styles.main_View}>
        <View style={styles.header_View}>
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
            Order details
          </Text>
        </View>
        </View>
        {/* <FlatList
        data={cartboxlist}
        renderItem={({item})=>{
          return (
            <Ordercomponent data={item}/>
          )
        }}
        /> */}
        <SwipeListView
        data={cartboxlist}
        rightOpenValue={-75}
        renderItem={({item})=>{
          return(
            <Ordercomponent data={item}/>
          )
        }}
        renderHiddenItem={({item})=>{
          return(
            <TouchableOpacity style={styles.delete_Button}>
            <AntDesign size={22} name={'delete'}/>
            </TouchableOpacity>
          )
        }}
        /> 
        <View style={{marginTop:moderateScale(42,0.6)}}>
        <Amountcomponent onPressitem={()=>{
          navigation.navigate('Confirmorder')
        }} />
        </View>
        
      </View>
    </ImageContainer>
  );
};

export default Orderdetails;

const styles = StyleSheet.create({
  main_View: {
    paddingHorizontal: moderateScale(12, 0.6),
    paddingVertical: moderateScale(20, 0.6),
  },
  main_Text: {
    marginTop: moderateScale(10, 0.6),
  },
  arrow_Back: {
    width: windowwidth * 0.11,
    height: windowwidth * 0.11,
    borderRadius: (windowwidth * 0.06) / 2,
    backgroundColor: '#1f1109',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_View:{
    paddingHorizontal:moderateScale(13,0.6)
  },
  delete_Button:{
    width:windowwidth *0.25,
    height:windowheight *0.14,
    borderTopRightRadius:moderateScale(15,0.6),
    borderBottomRightRadius:moderateScale(15,0.6),
    backgroundColor:colors.yellow,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-end',
    marginVertical:moderateScale(15,0.6),
    right:5
  },
  
});
