import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageContainer from '../Components/ImageContainer';
import Header from '../Components/Header';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../Utils/theme';
import {FlatList} from 'native-base';
import RestaurantCard from '../Components/RestaurantCard';
import { background } from 'native-base/lib/typescript/theme/styled-system';

const Nearestrestaurant = () => {
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
    {
      id: 4,
      Image: require('../Assets/Images/RestoImage1.png'),
      resto_Text: 'Vegan Resto',
      resto_Distance: '12 Mins',
    },
    {
      id: 5,
      Image: require('../Assets/Images/RestoImage2.png'),
      resto_Text: 'Healthy Food',
      resto_Distance: '8 Mins',
    },
    {
      id: 6,
      Image: require('../Assets/Images/RestoImage3.png'),
      resto_Text: 'Good Food',
      resto_Distance: '12 Mins',
    },
  ];
  return (
    <ImageContainer isScroll={true} isImage2={true}>
      <Header />
      <View style={styles.main_Container}>
        <Text
          style={{
            fontSize: moderateScale(15, 0.6),
            fontWeight: 'bold',
            color: colors.white,
          }}>
          Popular Restaurant
        </Text>
      </View>
      <FlatList
        style={{paddingHorizontal: moderateScale(28, 0.6),
          
        }}
        // contentContainerStyle={{alignItems: 'center'}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        data={RestaurantList}
        renderItem={({item}) => {
          return <RestaurantCard style={{marginTop:moderateScale(20,0.6)}} data={item} />;
        }}
      />
    </ImageContainer>
  );
};

export default Nearestrestaurant;

const styles = StyleSheet.create({
  main_Container: {
    paddingHorizontal: moderateScale(22, 0.6),
  },
});
