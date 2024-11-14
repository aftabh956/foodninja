import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';

import {Image} from 'native-base';
import Headercompt from '../Components/Headercompt';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {color} from 'native-base/lib/typescript/theme/styled-system';

const Home = ({navigation}) => {
    
  const [selected, setSelected] = useState();
  const boardList = [
    {
      id: 1,
      image: require('../Assets/Images/lessonsimage.png'),
      class_Name: 'Figma master class',
      subject_Name: 'UI Design',
      Chapters: '(28 lessons)',
      time_Text: '6h 30min',
      rating_Text: '4.9',
    },
    {
      id: 2,
      image: require('../Assets/Images/lessonsimage.png'),
      class_Name: 'Figma master class',
      subject_Name: 'UI Design',
      Chapters: '(28 lessons)',
      time_Text: '6h 30min',
      rating_Text: '4.9',
    },
    {
      id: 3,
      image: require('../Assets/Images/lessonsimage.png'),
      class_Name: 'Figma master class',
      subject_Name: 'UI Design',
      Chapters: '(28 lessons)',
      time_Text: '6h 30min',
      rating_Text: '4.9',
    },
  ];
  return (
    <View style={styles.main_View}>
      <Headercompt onpress={()=>{
        navigation.navigate('Filter')
      }} is_Text={true} issearch_Box={true}/>
      <View style={styles.container}>
        <View style={styles.box_Style}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.text_Style}>
              <Text
                style={{
                  fontSize: moderateScale(16, 0.6),
                  color: '#577395',
                  fontWeight: 'bold',
                }}>
                Discover Top Picks
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: moderateScale(26, 0.6),
                    color: '#223854',
                    fontWeight: 'bold',
                  }}>
                  +100
                </Text>
                <Text
                  style={{
                    fontSize: moderateScale(15, 0.6),
                    color: '#577395',
                    marginLeft: moderateScale(10, 0.3),
                    top: 3,
                  }}>
                  lessons
                </Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    fontSize: moderateScale(16, 0.6),
                    color: colors.white,
                    fontWeight: '500',
                  }}>
                  Explore more
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.image_Style}>
              <Image
                style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                source={require('../Assets/Images/bannerimage.png')}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: moderateScale(18, 0.6),
          }}>
          <Text
            style={{
              fontSize: moderateScale(16, 0.6),
              color: '#2C2C2C',
              fontWeight: 'bold',
            }}>
            Popular lessons
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: moderateScale(14, 0.6),
                color: '#3D8FEF',
                fontWeight: '500',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginHorizontal: moderateScale(20, 0.6)}}
        data={boardList}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[
                styles.board_Box,
                selected === item.id
                  ? {borderColor: 'red'}
                  : {borderColor: 'white'},
              ]}
              onPress={() => {
                setSelected(item.id);
                navigation.navigate('Overview')
              }}>
              <ImageBackground
                style={styles.flatlistimage}
                imageStyle={{
                  height: '100%',
                  width: '100%',
                  borderRadius: moderateScale(15, 0.6),
                }}
                source={item.image}>
                <TouchableOpacity style={styles.heartstyle}>
                  <AntDesign
                    style={{color: '#AEAEAE'}}
                    size={19}
                    name={'hearto'}
                  />
                </TouchableOpacity>
              </ImageBackground>
              <View style={{marginTop: moderateScale(5, 0.6)}}>
                <Text
                  style={{
                    fontSize: moderateScale(16, 0.6),
                    color: '#2C2C2C',
                    fontWeight: 'bold',
                  }}>
                  {item.class_Name}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: moderateScale(16, 0.6),
                      color: '#2C2C2C',
                      fontWeight: 'bold',
                    }}>
                    {item.subject_Name}
                  </Text>
                  <Text
                    style={{
                      fontSize: moderateScale(14, 0.6),
                      color: '#8C8C8C',
                      top: moderateScale(3, 0.3),
                      marginLeft: moderateScale(5, 0.3),
                    }}>
                    {item.Chapters}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: moderateScale(20, 0.6),
                }}>
                <EvilIcons
                  style={{color: '#3D8FEF'}}
                  size={22}
                  name={'clock'}
                />
                <Text
                  style={{
                    fontSize: moderateScale(14, 0.6),
                    color: '#3D8FEF',
                    width: windowwidth * 0.28,
                    marginLeft: moderateScale(5, 0.6),
                  }}>
                  {item.time_Text}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Entypo style={{color: '#FFC71E'}} size={20} name={'star'} />
                  <Text
                    style={{
                      fontSize: moderateScale(14, 0.6),
                      color: '#AEAEAE',
                    }}>
                    {item.rating_Text}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main_View: {
    width: windowwidth,
    height: windowheight,
    backgroundColor: colors.white,
  },
  container: {
    paddingHorizontal: moderateScale(20, 0.6),
  },
  box_Style: {
    width: windowwidth * 0.89,
    height: windowheight * 0.22,
    backgroundColor: '#ACD7FF',
    borderRadius: moderateScale(15, 0.6),
  },
  text_Style: {
    paddingHorizontal: moderateScale(20, 0.6),
    paddingVertical: moderateScale(20, 0.6),
  },
  button: {
    width: windowwidth * 0.35,
    height: moderateScale(39, 0.6),
    backgroundColor: '#3D8FEF',
    borderRadius: moderateScale(15, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(15, 0.6),
  },
  image_Style: {
    width: windowwidth * 0.43,
    height: windowheight * 0.2,
    // backgroundColor:'green',
    marginTop: moderateScale(17, 0.6),
    right: 10,
  },
  board_Box: {
    width: windowwidth * 0.52,
    height: windowheight * 0.33,
    // backgroundColor:'green',
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(13, 0.6),
    borderRadius: moderateScale(15, 0.6),
    marginTop: moderateScale(15, 0.6),
    borderWidth:1
  },
  flatlistimage: {
    width: windowwidth * 0.46,
    height: windowheight * 0.17,
    //  backgroundColor:'red',
    borderRadius: moderateScale(15, 0.6),
  },
  heartstyle: {
    width: windowwidth * 0.07,
    height: windowwidth * 0.07,
    borderRadius: (windowwidth * 0.07) / 2,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    right: 10,
    top: 6,
  },
});
