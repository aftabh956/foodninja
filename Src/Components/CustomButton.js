import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, Colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';

const CustomButton = ({onPress, buttontext, style, isRowBtn, iconName, imageStyle,imageIcon,
  isSvgbutton,buttontext_Style
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[isRowBtn ? styles.row_btn : styles.btn_view, style]}>
      {isRowBtn && <Image style={[{width: 40, height: 40, marginRight:moderateScale(20,0.6)}, imageStyle]} source={iconName} />}
      {isSvgbutton ? <Image source={imageIcon} /> : <Text
        style={[{
          color: 'white',
          fontSize: moderateScale(16, 0.3),
          fontWeight: '400',
          fontWeight:'bold'
        }, buttontext_Style]}>
        {buttontext}
      </Text> }
      
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn_view: {
    width: windowwidth * 0.35,
    height: moderateScale(48, 0.6),
    borderRadius: moderateScale(12, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    alignSelf: 'center',
    marginVertical:moderateScale(8,0.6)
  },
  row_btn: {
    width: windowwidth * 0.35,
    height: moderateScale(45, 0.6),
    borderRadius: moderateScale(12, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    // justifyContent:'space-between'
  },
});
