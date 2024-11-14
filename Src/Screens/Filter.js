import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import Headercompt from '../Components/Headercompt';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import { serializer } from '../../metro.config';
import { ScrollView } from 'native-base';

const Filter = () => {
  const [selected, setSelected] = useState();
  const [isselected, setisSelected] = useState();
  const [favourites, setFavourites] = useState([]);
  // const [isFavourite, setisFavourite] = useState(false);
  const FilterList = [
    {
      _id: 1,
      name: 'ui design',
    },
    {
      _id: 2,
      name: 'ux design',
    },
    {
      _id: 3,
      name: 'website design',
    },
    {
      _id: 4,
      name: 'ui animation',
    },
  ];
  const courseList = [
    {
      id: 1,
      image: require('../Assets/Images/searchimage1.png'),
      text: 'Mobile UI Essentials',
      subtext: 'Intermediate / 28 lessons',
      rate: '4.9',
      time: '6h 30min',
    },
    {
      id: 2,
      image: require('../Assets/Images/searchimage2.png'),
      text: 'UI Animation Basics',
      subtext: 'UI Animation Basics',
      rate: '4.8',
      time: '3h 42min',
    },
    {
      id: 3,
      image: require('../Assets/Images/searchimage3.png'),
      text: 'Web UI Best Practices',
      subtext: 'Advanced / 46 lessons',
      rate: '4.6',
      time: '8h 28min',
    },
    {
      id: 4,
      image: require('../Assets/Images/searchimage4.png'),
      text: 'Prototype with Figma',
      subtext: 'Intermediate / 39 lessons',
      rate: '4.9',
      time: '2h 34min',
    },
    {
      id: 5,
      image: require('../Assets/Images/searchimage4.png'),
      text: 'Prototype with Figma',
      subtext: 'Intermediate / 39 lessons',
      rate: '4.9',
      time: '2h 34min',
    },
  ];
 
  return (
    <View style={styles.main_View}>
      <Headercompt text={'Search'} icon_Name={'setting'} issearch_Box={true} />
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={FilterList}
          renderItem={({item}) => {
            return (
              <View style={styles.filter_Box}>
                <TouchableOpacity
                  onPress={() => {
                    setisSelected(item._id);
                  }}
                  style={styles.filter_Style}>
                  <Text
                    style={[
                      {
                        fontSize: moderateScale(16, 0.6),

                        fontWeight: 'bold',
                      },
                      isselected === item._id
                        ? {color: '#3D8FEF'}
                        : {color: '#D1D1D1'},
                    ]}>
                    {item.name}
                  </Text>
                  <Entypo
                    style={[
                      {left: moderateScale(5, 0.3)},
                      isselected === item._id
                        ? {color: '#3D8FEF'}
                        : {color: '#D1D1D1'},
                    ]}
                    size={20}
                    name={'cross'}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={courseList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelected(item.id);
                }}
                style={[
                  styles.course_Box,
                  selected === item.id
                    ? {backgroundColor: '#3D8FEF'}
                    : {backgroundColor: 'white'},
                ]}>
                <View
                  style={{flexDirection: 'row', gap: moderateScale(10, 0.3)}}>
                  <ImageBackground
                    style={styles.image_Style}
                    imageStyle={{
                      height: '100%',
                      width: '100%',
                      borderRadius: moderateScale(15, 0.6),
                    }}
                    source={item.image}></ImageBackground>
                  <View>
                    <Text
                      style={[
                        {
                          fontSize: moderateScale(16, 0.6),

                          fontWeight: 'bold',
                        },
                        selected === item.id
                          ? {color: 'white'}
                          : {color: '#2C2C2C'},
                      ]}>
                      {item.text}
                    </Text>
                    <Text
                      style={[
                        {
                          fontSize: moderateScale(14, 0.6),
                        },
                        selected === item.id
                          ? {color: 'white'}
                          : {color: '#8C8C8C'},
                      ]}>
                      {item.subtext}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: moderateScale(25, 0.6),
                        alignItems: 'center',
                      }}>
                      <Entypo
                        style={{color: '#FFC71E'}}
                        size={20}
                        name={'star'}
                      />
                      <Text
                        style={[
                          {
                            fontSize: moderateScale(14, 0.6),
                            color: '#3D8FEF',
                            width: windowwidth * 0.1,
                          },
                          selected === item.id
                            ? {color: 'white'}
                            : {color: '#8C8C8C'},
                        ]}>
                        {item.rate}
                      </Text>
                      <Text
                        style={{
                          fontSize: moderateScale(14, 0.3),
                          color: '#D2D2D2',
                          width: windowwidth * 0.27,
                        }}>
                        {item.time}
                      </Text>
                      <TouchableOpacity
                        // onPress={() => {
                        //   if(!favourites.includes(item?.id)){

                        //     setFavourites(prev=>[...prev ,item?.id])
                        //   }
                        //   // else {
                        //   //   setFavourites(favourites.filter(check=>check !== item?.id))
                        //   // }
                        // }}
                        //   // setisFavourite(!isFavourite)
                        //   // setFavourites(prev => [...prev, item?.id]);
                        //   // setFavourites([item?.id]);
                        //   // toggleFavourite(item.id);
                        // }}
                        onPress={()=>{
                          if(!favourites.includes(item?.id)){
                            setFavourites(prev=>[...prev,item?.id])
                          }
                          else{
                            setFavourites(favourites.filter(id=>id !=item?.id))
                          }
                        }}
                        
                        style={styles.heart_Circle}>
                        <Entypo
                          style={{ //[1].includes(item.id)
                            color: favourites.includes(item.id)  // [1, 2, 3, ].includes(item.id)
                              ? 'red'
                              : '#8C8C8C',
                          }}
                          size={22}
                          name={
                            // favourites.includes(item.id)
                            favourites.includes(item.id)
                              ? 'heart'
                              : 'heart-outlined'
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      </ScrollView>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  main_View: {
    width: windowwidth,
    height: windowheight,
    backgroundColor: colors.white,
    // paddingHorizontal:moderateScale(20,0.6)
  },
  filter_Box: {
    // padding:moderateScale(10,0.3),
    // width:windowwidth,
    height: moderateScale(40, 0.6),
    // backgroundColor:'green',
    paddingHorizontal: moderateScale(20, 0.6),
    // alignItems:'center',
    // justifyContent:'center'
  },
  filter_Style: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: moderateScale(15, 0.6),
  },
  course_Box: {
    width: windowwidth * 0.91,
    height: windowheight * 0.16,
    borderRadius: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(12, 0.3),
    // alignSelf:'center',
    // backgroundColor:'#3D8FEF',
    justifyContent: 'center',
  },
  image_Style: {
    width: windowwidth * 0.33,
    height: windowheight * 0.13,
    borderRadius: moderateScale(15, 0.6),
  },
  heart_Circle: {
    width: windowwidth * 0.07,
    height: windowwidth * 0.07,
    borderRadius: (windowwidth * 0.07) / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
