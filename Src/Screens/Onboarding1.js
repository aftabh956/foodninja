import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, Colors, windowheight, windowwidth} from '../Utils/theme';
import AppIntroSlider from 'react-native-app-intro-slider';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';

const Onboarding1 = ({navigation}) => {
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
  const renderNextButton = () => {
    return (
      <View
        style={{width: '100%', alignSelf: 'center', backgroundColor: 'red'}}>
        <View
          style={{
            width: windowwidth * 0.35,
            height: moderateScale(45, 0.6),
            borderRadius: moderateScale(12, 0.6),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.primary,
            alignSelf: 'center',
            bottom: moderateScale(30, 0.6),
          }}>
          {/* <CustomButton buttontext={'Next'}/> */}
          <Text style={{color: colors.white, fontSize: moderateScale(16, 0.6)}}>
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
          bottom: moderateScale(20, 0.6),
          alignSelf: 'center',
        }}>
        <CustomButton buttontext={'Next'}/>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        dotStyle={{display: 'none'}}
        activeDotStyle={{display: 'none'}}
        data={screenList}
        renderItem={({item}) => {
          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: windowwidth * 0.9,
                  height: windowheight * 0.45,
                  marginTop: moderateScale(70, 0.6),
                  alignSelf: 'center',
                  resizeMode: 'cover',
                  // backgroundColor: 'red',
                }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  source={item.image}
                />
              </View>
              <Text
                style={
                  item?.id === 1
                    ? styles.heading
                    : [
                        styles.heading,
                        {
                          marginTop: moderateScale(35, 0.6),
                          width: windowwidth * 0.85,
                        },
                      ]
                }
                // style={[
                //   item.id === 1 && {
                //     fontSize: moderateScale(22, 0.6),
                //     color: colors.white,
                //     fontWeight: '400',
                //     alignSelf: 'center',
                //     textAlign: 'center',
                //     lineHeight: moderateScale(28.83, 0.6),
                //     width: windowwidth * 0.55,
                //   },
                //   item.id === 2 && {
                //     fontSize: moderateScale(22, 0.6),
                //     fontWeight: '400',
                //     color: colors.white,
                //     fontWeight: '400',
                //     alignSelf: 'center',
                //     textAlign: 'center',
                //     width: windowwidth * 0.85,
                //     lineHeight: moderateScale(28.83, 0.6),
                //     marginTop: moderateScale(35, 0.6),
                //   },
                // ]}
              >
                {item.title}
              </Text>
              <Text
                style={[
                  item.id === 1 && {
                    fontSize: moderateScale(12, 0.6),
                    color: colors.white,
                    fontWeight: '200',
                    alignSelf: 'center',
                    width: windowwidth * 0.65,
                    textAlign: 'center',
                    lineHeight: moderateScale(21.66, 0.3),
                    marginTop: moderateScale(20, 0.6),
                  },
                  item.id === 2 && {
                    fontSize: moderateScale(12, 0.6),
                    color: colors.white,
                    fontWeight: '200',
                    alignSelf: 'center',
                    width: windowwidth * 0.65,
                    textAlign: 'center',
                    lineHeight: moderateScale(21.66, 0.3),
                    marginTop: moderateScale(20, 0.6),
                  },
                ]}>
                {item.subTitle}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
  container: {
    height: windowheight,
    width: windowwidth,
    backgroundColor: colors.black,
  },
  heading: {
    fontSize: moderateScale(22, 0.6),
    color: colors.white,
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: moderateScale(28.83, 0.6),
    width: windowwidth * 0.55,
  },
});
