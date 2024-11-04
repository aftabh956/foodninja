import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {Image} from 'native-base';

const RestaurantCard = ({data, style, onPressItem}) => {
  return (
    <TouchableOpacity onPress={onPressItem}>
      <View style={[styles.resto_Box, style]}>
        <View
          style={{
            height: moderateScale(75, 0.6),
            width: moderateScale(85, 0.6),
          }}>
          <Image style={{height: '100%', width: '100%',resizeMode:'contain'}} source={data.Image} />
        </View>
        <Text
          style={{
            fontSize: moderateScale(16, 0.6),
            fontWeight: 'bold',
            color: colors.white,
            marginTop: moderateScale(10, 0.6),
          }}>
          {data.resto_Text}
        </Text>
        <Text
          style={{
            fontSize: moderateScale(13, 0.6),
            color: colors.white,
            fontWeight: '200',
            marginTop: moderateScale(5, 0.6),
          }}>
          {data.resto_Distance}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  resto_Box: {
    width: windowwidth * 0.38,
    height: windowheight * 0.23,
    backgroundColor: colors.lightgrey,
    borderRadius: moderateScale(15, 0.6),
    alignItems: 'center',
    paddingVertical: moderateScale(10, 0.6),
    marginTop: moderateScale(15, 0.6),
    marginEnd: moderateScale(15, 0.6),
  },
});
