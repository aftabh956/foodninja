import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Icon} from 'native-base';
const CustomTextField = ({
  placeholder,
  iconName,
  isIconImage,
  input_Style,
  isRight_icon,
  show_Password,
  icon_Type,
  style,
  righticon_Type,
  righticonName
}) => {
  return (
    <View style={[isIconImage ? styles.icon_Style : styles.form , style && style]}>
      {isIconImage && (
        <Icon
          style={{color: colors.primary}}
          size={moderateScale(20,0.6)}
          name={iconName}
          as={icon_Type ? icon_Type : FontAwesome5}
        />
      )}
      <TextInput
        secureTextEntry={show_Password}
        style={[styles.input_Style, input_Style]}
        placeholderTextColor={'grey'}
        placeholder={placeholder}
      />
      {isRight_icon && (
        <Icon
          style={{color: show_Password ? 'grey' : colors.primary }}
          size={18}
          name={'eye'}
          as={Feather} 
        />
      )}
    </View>
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  form: {
    width: windowwidth * 0.89,
    height: moderateScale(50, 0.6),
    backgroundColor: '#242322',
    alignSelf: 'center',
    borderRadius: moderateScale(15, 0.6),
    flexDirection: 'row',
    paddingLeft: moderateScale(20, 0.6),
    marginVertical:moderateScale(10,0.6)
    
  },

  icon_Style: {
    width: windowwidth * 0.89,
    height: moderateScale(50, 0.6),
    backgroundColor: '#242322',
    alignSelf: 'center',
    borderRadius: moderateScale(15, 0.6),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(25, 0.6),
    marginVertical:moderateScale(6,0.6)
  },
  input_Style: {
    width: windowwidth * 0.63,
    // backgroundColor:'green'
    color: colors.white,
  },
});
