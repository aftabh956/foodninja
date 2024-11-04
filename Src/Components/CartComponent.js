import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';

const CartComponent = ({main_view, imageViewstyle, data, text_view_Style,onPressItem,isrighticon,
  time_Style,chat_Style
}) => {
  return (
    <TouchableOpacity onPress={onPressItem} style={[styles.card_main_view, main_view]}>
      <View style={[styles.image_view, imageViewstyle]}>
        <Image source={data?.Photomenu} style={styles.image} />
      </View>
      <View style={[styles.text_view,text_view_Style]}>
        <Text style={{fontSize: moderateScale(15, 0.6), color: colors.white}}>
          {data?.Menuname}
        </Text>
        <Text style={{fontSize: moderateScale(14, 0.6), color: 'grey'}}>
          {data?.Restaurantname}
        </Text>
      </View>
      { isrighticon && (
      <View
            style={[
              {justifyContent: 'center'},
              time_Style && {marginTop: moderateScale(-25, 0.3)},
            ]}>
            <Text
              style={[
                {
                  fontSize: moderateScale(22, 0.6),
                  fontWeight: 'bold',
                  color: colors.yellow,
                },
                chat_Style && {fontSize: moderateScale(14, 0.6), color: 'grey'},
              ]}>
              {data.price}
            </Text>
          </View>
          )}
    </TouchableOpacity>
  );
};

export default CartComponent;

const styles = StyleSheet.create({
  card_main_view: {
    width: windowwidth * 0.9,
    backgroundColor: colors.lightgrey,
    marginTop: moderateScale(12, 0.6),
    borderRadius: moderateScale(15, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(15, 0.6),
    flexDirection: 'row',
    paddingVertical: moderateScale(16, 0.6),
  },
  image_view: {
    width: moderateScale(50, 0.6),
    height: moderateScale(50, 0.6),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text_view: {
    width: windowwidth * 0.5,
    
    marginLeft: moderateScale(15, 0.6),
  },
});
