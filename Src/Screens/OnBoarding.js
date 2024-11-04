import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';
import {colors, windowheight, windowwidth} from '../Utils/theme';

const screenList = [
  {
    id: 1,
    image: require('../Assets/Images/boardingImage1.png'),
    title: 'Find your  Comfort Food here',
    subTitle:
      'Here You Can find a chef or dish for every taste and color. Enjoy!',
  },
  {
    id: 2,
    image: require('../Assets/Images/boardingImage2.png'),
    title: 'Food Ninja is Where Your Comfort Food Lives',
    subTitle: 'Enjoy a fast and smooth food delivery at your doorstep',
  },
];

const OnBoarding = ({navigation}) => {
  const renderNextButton = () => {
    return (
      <View
        style={{
          width: windowwidth,
          alignItems: 'center',
          justifyContent: 'center',
          // alignSelf: 'center',
          left: moderateScale(10, 0.6),
        }}>
        <View
          style={{
            width: windowwidth * 0.35,
            height: moderateScale(45, 0.6),
            borderRadius: moderateScale(12, 0.6),
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: moderateScale(16, 0.3),
              fontWeight: '400',
            }}>
            Next
          </Text>
        </View>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View 
        style={{
          width: windowwidth,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          left: moderateScale(10, 0.6),
        }}>
        <CustomButton onPress={()=>{
            navigation.navigate('SigninScreen');
        }}
            // isRowBtn={true}
            // iconName={require('../Assets/Images/facebook.png')}
          buttontext={'Done'}
          style={{width:windowwidth *0.35 }}
        />
      </View>
    );
  };

  return (
    <AppIntroSlider
      dotStyle={{display: 'none'}}
      activeDotStyle={{display: 'none'}}
      data={screenList}
      style={{width: windowwidth, height: windowheight}}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderItem={({item}) => {
        return (
          <View style={styles.main_view}>
            <View style={styles.image_view}>
              <Image
                source={item.image}
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <Text
              style={
                item?.id === 1
                  ? styles.heading
                  : [
                      styles.heading,
                      {
                        width: windowwidth * 0.85,
                      },
                    ]
              }>
              {item?.title}
            </Text>
            <Text style={styles.sub_heading}>{item?.subTitle}</Text>
          </View>
        );
      }}
    />
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  main_view: {
    width: windowwidth,
    height: windowheight,
    backgroundColor: colors.black,
    alignItems: 'center',
    alignSelf: 'center',
  },
  heading: {
    fontSize: moderateScale(22, 0.6),
    color: colors.white,
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: moderateScale(28.83, 0.6),
    width: windowwidth * 0.55,
    marginTop: moderateScale(35, 0.6),
  },
  sub_heading: {
    fontSize: moderateScale(12, 0.6),
    color: colors.white,
    fontWeight: '200',
    alignSelf: 'center',
    width: windowwidth * 0.65,
    textAlign: 'center',
    lineHeight: moderateScale(21.66, 0.3),
    marginTop: moderateScale(20, 0.6),
  },
  image_view: {
    marginTop: moderateScale(70, 0.6),
    width: windowwidth * 0.9,
    height: windowheight * 0.45,
  },
});
