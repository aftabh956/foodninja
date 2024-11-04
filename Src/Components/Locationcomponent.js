import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {Image} from 'native-base';

const Locationcomponent = ({
  text,
  isedit_Button,
  isPaypal,
  style,
  isLocationbutton,
  onPressItem,
  text_Color,
  text_Style,
  location_text,
  paypal_Container,
  image
}) => {
  return (
    <View style={{paddingVertical: moderateScale(10, 0.6)}}>
      <View style={[styles.box_Style, style]}>
        <View style={styles.edit_Button}>
          <Text style={{fontSize: moderateScale(14, 0.6), color: 'grey'}}>
            {text}
          </Text>
          {isedit_Button && (
            <TouchableOpacity onPress={onPressItem}>
              <Text
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: colors.primary,
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {
          isPaypal ? (
            <View style={[styles.paypal_Style,paypal_Container]}>
                
              <Image  source={image} />
              
              <TextInput
                placeholderTextColor={text_Color}
                placeholder="2121 6352 8465 ****"
              />
            </View>
          ) : (<>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(10, 0.6),
              }}>
              <View style={styles.location_Icon}>
                <Entypo
                  style={{color: colors.orange}}
                  size={25}
                  name={'location-pin'}
                />
              </View>
              <Text
                style={[{
                  fontSize: moderateScale(15, 0.6),
                  color: colors.white,
                  marginLeft: moderateScale(15, 0.6),
                },text_Style]}>
                {location_text}
              </Text>
              
            </View>
            {isLocationbutton && <TouchableOpacity style={{marginLeft:moderateScale(50,0.6),
                marginTop:moderateScale(7,0.6)
            }}>
                <Text style={{fontSize:moderateScale(14,0.6),
                    color:colors.primary
                }} >set location</Text>
                </TouchableOpacity>}
            </>
          )
            
        }
      </View>
    </View>
  );
};

export default Locationcomponent;

const styles = StyleSheet.create({
  box_Style: {
    width: windowwidth * 0.92,
    height: windowheight * 0.14,
    backgroundColor: colors.lightgrey,
    borderRadius: moderateScale(15, 0.6),
    alignSelf: 'center',
    // alignItems:'center',
    // justifyContent:'center',
    paddingHorizontal: moderateScale(10, 0.6),
    padding:moderateScale(10,0.3)
    // paddingVertical: moderateScale(10, 0.6),
  },
  edit_Button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowwidth * 0.82,
  },
  location_Icon: {
    width: windowwidth * 0.09,
    height: windowwidth * 0.09,
    borderRadius: (windowwidth * 0.09) / 2,
    backgroundColor: '#FFE14D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paypal_Style: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:moderateScale(15,0.6)
    // bottom:8
    // position:'absolute',
    // padding:moderateScale(10,0.6),
    // backgroundColor:'red'
  },
});
