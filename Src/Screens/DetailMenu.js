import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {Image} from 'native-base';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Rating} from 'react-native-ratings';
import TestimonialList from '../Components/TestimonialList';
import CustomButton from '../Components/CustomButton';
import {position} from 'native-base/lib/typescript/theme/styled-system';

const DetailMenu = () => {
  const [itemDetail,setitemDetail] = useState(
    false
  )
  const TestimonialsList = [
    {
      id: 1,
      Image: require('../Assets/Images/PhotoProfile1.png'),
      title: 'Dianne Russell',
      date: '12 April 2021',
      subtext:
        'This Is great, So delicious! You Must Here, With Your family . . ',
      rating: '5',
    },
    {
      id: 2,
      Image: require('../Assets/Images/PhotoProfile2.png'),
      title: 'Dianne Russell',
      date: '12 April 2021',
      subtext:
        'This Is great, So delicious! You Must Here, With Your family . . ',
      rating: '5',
    },
  ];
  return (
    <SafeAreaView>
      <View style={{height: windowheight * 0.52}}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={require('../Assets/Images/detailMenuPic.png')}
        />
      </View>
      <TouchableOpacity activeOpacity={1} style={[styles.frame_Box, {height:itemDetail ? windowheight : windowheight *0.7,
        marginTop: itemDetail? moderateScale(-300) : -120
      }]}
      onPress={()=>{
        setitemDetail(!itemDetail)
      }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:moderateScale(100,0.6)}}>
          <View style={styles.box_Style}>
            <View style={styles.scroll_Tool}></View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: moderateScale(15, 0.6),
              }}>
              <View style={styles.popular_Box}>
                <Text
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: colors.primary,
                  }}>
                  Popular
                </Text>
              </View>
              <View style={styles.icon_Style}>
                <View style={styles.icon_Box1}>
                  <FontAwesome6
                    style={{color: colors.primary}}
                    size={15}
                    name={'location-dot'}
                  />
                </View>
                <View style={styles.icon_Box2}>
                  <AntDesign
                    style={{color: '#FF1D1D'}}
                    size={15}
                    name={'heart'}
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                fontSize: moderateScale(27, 0.6),
                fontWeight: 'bold',
                color: colors.white,
                marginTop: moderateScale(10, 0.6),
              }}>
              Rainbow Sandwich Sugarless
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(10, 0.6),
              }}>
              <EvilIcons
                style={{color: colors.primary}}
                size={22}
                name={'location'}
              />
              <Text
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: 'grey',
                  marginLeft: moderateScale(7, 0.6),
                  marginRight: moderateScale(28, 0.6),
                }}>
                19 Km
              </Text>
              <Rating
                type="custom"
                startingValue={0.6}
                ratingCount={1}
                ratingColor={colors.primary}
                imageSize={moderateScale(18, 0.6)}
                tintColor="#0E1110"
              />
              <Text
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: 'grey',
                  marginLeft: moderateScale(7, 0.6),
                }}>
                4.8 Rating
              </Text>
            </View>
            <View style={{marginTop: moderateScale(15, 0.6)}}>
              <Text
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: colors.white,
                  lineHeight: moderateScale(19, 0.6),
                }}>
                Nulla occaecat velit laborum exercitation ullamco. Elit labore
                eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit
                non est cillum consequat cupidatat ex Lorem laboris labore
                aliqua ad duis eu laborum.
              </Text>
            </View>
            <View
              style={{
                marginTop: moderateScale(15, 0.6),
                gap: moderateScale(7, 0.3),
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: 'white',
                    borderRadius: 5 / 2,
                  }}></View>
                <Text
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: colors.white,
                    marginLeft: moderateScale(10, 0.6),
                  }}>
                  Strowberry
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: 'white',
                    borderRadius: 5 / 2,
                  }}></View>
                <Text
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: colors.white,
                    marginLeft: moderateScale(10, 0.6),
                  }}>
                  Cream
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 5,
                    height: 5,
                    backgroundColor: 'white',
                    borderRadius: 5 / 2,
                  }}></View>
                <Text
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: colors.white,
                    marginLeft: moderateScale(10, 0.6),
                  }}>
                  Wheat
                </Text>
              </View>
            </View>
            <View style={{marginTop: moderateScale(15, 0.6)}}>
              <Text
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: colors.white,
                  lineHeight: moderateScale(19, 0.6),
                }}>
                Nulla occaecat velit laborum exercitation ullamco. Elit labore
                eu aute elit nostrud culpa velit excepteur deserunt sunt.
              </Text>
            </View>
            <Text
              style={{
                fontSize: moderateScale(15, 0.6),
                color: colors.white,
                marginTop: moderateScale(10, 0.6),
                fontWeight: 'bold',
              }}>
              Testimonials
            </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={TestimonialsList}
              renderItem={({item}) => {
                return <TestimonialList data={item} />;
              }}
            />
          </View>
        </ScrollView>
      </TouchableOpacity>
      <View style={{position: 'absolute',alignSelf: 'center',bottom: itemDetail? 100 : 70}}>
        <CustomButton
          style={{width: windowwidth * 0.9}}
          buttontext={'Add To Chart'}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailMenu;

const styles = StyleSheet.create({
  frame_Box: {
    width: windowwidth,
    backgroundColor: '#0E1110',
    height: windowheight * 0.9,
    marginTop: moderateScale(-250, 0.6),
    borderRadius: moderateScale(29, 0.6),
  },
  box_Style: {
    paddingHorizontal: moderateScale(20, 0.6),
  },
  scroll_Tool: {
    height: moderateScale(3, 0.6),
    width: moderateScale(50, 0.6),
    borderRadius: moderateScale(10, 0.6),
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginTop: moderateScale(10, 0.6),
  },
  popular_Box: {
    height: moderateScale(30, 0.6),
    width: windowwidth * 0.22,
    backgroundColor: '#26402f',
    borderRadius: moderateScale(15, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:moderateScale(15,0.6)
  },
  icon_Style: {
    flexDirection: 'row',
    width: moderateScale(60, 0.6),
    justifyContent: 'space-between',
  },
  icon_Box1: {
    width: windowwidth * 0.07,
    height: windowwidth * 0.07,
    borderRadius: (windowwidth * 0.07) / 2,
    backgroundColor: '#26402f',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:moderateScale(13,0.6),
  },
  icon_Box2: {
    width: windowwidth * 0.07,
    height: windowwidth * 0.07,
    borderRadius: (windowwidth * 0.07) / 2,
    backgroundColor: 'rgba(255, 29, 29, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:moderateScale(13,0.6),
  },
});
