import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import Headercompt from '../Components/Headercompt';
import {moderateScale} from 'react-native-size-matters';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { color } from 'native-base/lib/typescript/theme/styled-system';

const Overview = () => {
  const [selected,setSelected] = useState()
  const [colorbox, setcolorbox] = useState('white')
  const [isENrolled, setIsEnnrolled] = useState(false);
  const Lessonlist = [
    {
      id: 1,
      text: 'Introduction to figma',
      date: '04:28 min',
    },
    {
      id: 2,
      text: 'Understanding Interface',
      date: '06:12 min',
    },
    {
      id: 3,
      text: 'Create first design project',
      date: '43:58 min',
    },
  ];
  return (
    <View style={styles.main_View}>
      <Headercompt text={'Course Overview'} icon_Name={'hearto'} />
      <View style={styles.container}>
        <ImageBackground
          style={styles.main_Image}
          imageStyle={{
            height: '100%',
            width: '100%',
            borderRadius: moderateScale(15, 0.6),
          }}
          source={require('../Assets/Images/courseview.png')}>
          <TouchableOpacity style={styles.play_Icon}>
            <FontAwesome5 style={{color: '#3D8FEF'}} size={22} name={'play'} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.text_Style}>
          <Text
            style={{
              fontSize: moderateScale(20, 0.6),
              color: '#2C2C2C',
              fontWeight: 'bold',
              width: windowwidth * 0.86,
            }}>
            Figma master class for beginners
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: moderateScale(7, 0.6)}}>
            <EvilIcons style={{color: '#3D8FEF'}} size={22} name={'clock'} />
            <Text style={{fontSize: moderateScale(14, 0.6), color: '#8C8C8C'}}>
              6h 30min
            </Text>
            <Text
              style={{
                fontSize: moderateScale(14, 0.6),
                color: '#8C8C8C',
                marginLeft: moderateScale(10, 0.6),
                width: windowwidth * 0.52,
              }}>
              28 lessons
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Entypo style={{color: '#FFC71E'}} size={20} name={'star'} />
              <Text
                style={{fontSize: moderateScale(14, 0.6), color: '#3D8FEF'}}>
                4.9
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            gap: moderateScale(18, 0.6),
            marginTop: moderateScale(15, 0.6),
          }}>
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: '#3D8FEF',
              width: windowwidth * 0.24,
            }}>
            <Text
              style={{
                fontSize: moderateScale(18, 0.6),
                color: '#3D8FEF',
                fontWeight: 'bold',
                marginLeft: moderateScale(9, 0.6),
              }}>
              Lessons
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: '#D2D2D2',
              width: windowwidth * 0.31,
            }}>
            <Text
              style={{
                fontSize: moderateScale(18, 0.6),
                color: '#D2D2D2',
                fontWeight: 'bold',
                marginLeft: moderateScale(9, 0.6),
              }}>
              Description
            </Text>
          </View>
        </View>
        <FlatList
        style={styles.flatlist_Style}
        showsVerticalScrollIndicator={false}
          data={Lessonlist}
          renderItem={({item}) => {
            return <View style={styles.lesson_BOx}>
              <TouchableOpacity onPress={()=>{
                setSelected (item.id)
              }} style={[styles.lesson_Icon, selected === item.id ? {backgroundColor:'#3D8FEF'} :
                {backgroundColor:'white'}
              ]}>
              <FontAwesome5 style={[styles.icon_Color, selected === item.id ?
                {color:'white'} : {color:'#3D8FEF'}
              ]} size={15} name={'play'} />
              </TouchableOpacity>
                <View style={{width:windowwidth*0.65,marginLeft:moderateScale(22,0.6)}}>
                  <Text style={{fontSize:moderateScale(16,0.6),
                    color:'#2C2C2C',fontWeight:'bold'
                  }}>{item.text}</Text>
                  <Text style={{fontSize:moderateScale(16,0.6),
                    color:'#AEAEAE'
                  }}>{item.date}</Text>
                  </View>
                <TouchableOpacity>
                <AntDesign style={{color:'#3D8FEF'}} size={20} name={'right'}/>
                </TouchableOpacity>
            </View>;
          }}
        />
       <View style={{flexDirection:'row',marginTop:moderateScale(25,0.6),gap:moderateScale(14,0.6)}}>
        <View style={styles.price_Box}>
          <Text style= {{fontSize:moderateScale(16,0.6),
            color:'#3D8FEF',fontWeight:'bold',
          }}>$399</Text>
        </View >
        <TouchableOpacity style={styles.Enroll_Box}>
          <Text style={{fontSize:moderateScale(16,0.6),
            color:colors.white,fontWeight:'bold'
          }}>Enroll Now</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  main_View: {
    width: windowwidth,
    height: windowheight,
    backgroundColor: colors.white,
    // paddingHorizontal:moderateScale(20,0.6)
  },
  container: {
    paddingHorizontal: moderateScale(20, 0.6),
    paddingVertical: moderateScale(15, 0.6),
  },
  main_Image: {
    height: windowheight * 0.28,
    width: windowwidth * 0.9,
    alignSelf: 'center',
    borderRadius: moderateScale(15, 0.6),
  },
  play_Icon: {
    width: windowwidth * 0.13,
    height: windowwidth * 0.13,
    borderRadius: (windowwidth * 0.13) / 2,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(70, 0.6),
  },
  text_Style: {
    marginTop: moderateScale(20, 0.6),
  },
  lesson_Icon:{
    width: windowwidth * 0.11,
    height: windowwidth * 0.11,
    borderRadius: (windowwidth * 0.11) / 2,
    backgroundColor: '#3D8FEF',
    alignItems: 'center',
    justifyContent: 'center',
    // width:windowwidth*0.25
    // alignSelf: 'center',
    
  },
  lesson_BOx:{
    flexDirection:'row',
  alignItems:'center',
     paddingVertical:moderateScale(10,0.6)
    
  },
  flatlist_Style:{
    marginTop:moderateScale(10,0.6),
    // paddingVertical:moderateScale(25,0.6)
  },
  icon_Color:{
    color:'#3D8FEF'
  },
  price_Box:{
    width:windowwidth*0.17,
    borderRadius:moderateScale(10,0.6),
    alignItems:'center',
    justifyContent:'center',
    height:moderateScale(40,0.6),
    backgroundColor:'white'
  },
  color_Box:{
    backgroundColor:'white',
    width:windowwidth*0.17,
    borderRadius:moderateScale(10,0.6),
    alignItems:'center',
    justifyContent:'center',
    height:moderateScale(40,0.6),
    
  },
  Enroll_Box:{
    width:windowwidth*0.67,
    borderRadius:moderateScale(12,0.6),
    alignItems:'center',
    justifyContent:'center',
    height:moderateScale(40,0.6),
    backgroundColor:'#3D8FEF'
  }
});
