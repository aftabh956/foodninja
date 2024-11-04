import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import ImageContainer from '../Components/ImageContainer';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';
import {Rating} from 'react-native-ratings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../Components/CustomButton';
import {color} from 'native-base/lib/typescript/theme/styled-system';

const Finishorder = ({navigation}) => {
  const [screenList, setScreenList] = useState('Screen1');
  console.log('Screen', screenList);
  return (
    <ImageContainer>
      <View style={styles.main_View}>
        <View style={styles.image_Style}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={
              screenList === 'Screen2'
                ? require('../Assets/Images/ratefoodphoto.png')
                : // : require('../Assets/Images/rateriderphoto.png'))
                screenList === 'Screen3'
                ? require('../Assets/Images/raterestaurantphoto.png')
                : require('../Assets/Images/rateriderphoto.png')
              // (screenList === 'Screen2'
              //   ? require('../Assets/Images/ratefoodphoto.png')
              //   : require('../Assets/Images/rateriderphoto.png')) ||
              // (screenList === 'Screen3'
              //   ? require('../Assets/Images/raterestaurantphoto.png')
              //   : require('../Assets/Images/rateriderphoto.png'))
            }
          />
        </View>
        <View style={styles.text_Style}>
          <Text
            style={{
              fontSize: moderateScale(25, 0.6),
              color: colors.white,
              fontWeight: 'bold',
            }}>
            Thank You!
          </Text>
        </View>
        <Text
          style={{
            fontSize: moderateScale(25, 0.6),
            color: colors.white,
            fontWeight: 'bold',
            bottom: 20,
          }}>
          {screenList === 'Screen2' ? 'Enjoy Your Meal' : 'Order Completed'}
        </Text>
        <View>
          <Text
            style={{
              fontSize: moderateScale(14, 0.6),
              color: colors.white,
            }}>
            {screenList === 'Screen2'
              ? 'Please rate your Food'
              : screenList === 'Screen3'
              ? 'Please rate your Restaurant'
              : 'Please rate your last Driver'}
          </Text>
        </View>
        <Rating
          type="custom"
          //   readonly
          startingValue={5}
          ratingCount={5}
          ratingColor={colors.yellow}
          imageSize={moderateScale(28, 0.3)}
          tintColor="black"
          style={{marginTop: moderateScale(30, 0.6), width: windowwidth * 0.1}}
        />
        <View
          style={{
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: 30,
          }}>
          <View style={styles.feedback_Box}>
            <FontAwesome
              style={{
                color: colors.primary,
                width: windowwidth * 0.12,
                paddingLeft: moderateScale(15, 0.6),
              }}
              size={22}
              name={'pencil-square-o'}
            />
            <TextInput
              placeholderTextColor={'grey'}
              style={{
                fontSize: moderateScale(12, 0.6),
              }}
              placeholder="Leave feedback"
            />
          </View>
          <View style={styles.button_Style}>
            <CustomButton
              onPress={() => {
                // setScreenList(screenList === 'Screen2' ? 'Screen3' : 'Screen2');
                screenList === 'Screen3'
                  ? navigation.navigate('Tabnavigation')
                  : setScreenList(
                      screenList === 'Screen2' ? 'Screen3' : 'Screen2',
                    );
              }}
              style={{width: windowwidth * 0.59}}
              buttontext={'Submit'}
            />
            <CustomButton
              style={{
                width: windowwidth * 0.26,
                backgroundColor: colors.lightgrey,
              }}
              buttontext={'Skip'}
              buttontext_Style={{color: colors.primary}}
            />
          </View>
        </View>
      </View>
    </ImageContainer>
  );
};

export default Finishorder;

const styles = StyleSheet.create({
  main_View: {
    alignItems: 'center',
    justifyContent: 'center',
    height: windowheight,
    // gap:moderateScale(10,0.6)
  },

  image_Style: {
    width: windowwidth * 0.38,
    height: windowheight * 0.19,
    bottom: 50,
    // marginTop: moderateScale(20, 0.6),
    // backgroundColor:'red'
  },
  text_Style: {
    width: windowwidth * 0.35,
    bottom: 20,
    // marginTop:moderateScale(10,0.6)
  },
  feedback_Box: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowwidth * 0.9,
    height: windowheight * 0.07,
    backgroundColor: colors.lightgrey,
    borderRadius: moderateScale(12, 0.6),
    // marginTop: moderateScale(80, 0.6),
  },
  button_Style: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: moderateScale(18, 0.6),
    marginTop: moderateScale(8, 0.6),
  },
});

// if(scren2){
//   screen2iMage
// } else if(screeb3){
//   screen3Imagw
// } else{
//   image``
// }
//  screen2 ? Image2 : screen3 ? screen3Image : screen`Image`
