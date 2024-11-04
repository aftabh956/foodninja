import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ImageContainer from '../Components/ImageContainer';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Callringing = ({navigation}) => {
  const [setVolume, setITemVolume] = useState(false);
  return (
    <ImageContainer>
      <View style={styles.main_View}>
        <View style={styles.image_Style}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            source={require('../Assets/Images/CallerImage.png')}
          />
        </View>
        <View style={styles.text_Style}>
          <Text
            style={{
              fontSize: moderateScale(25, 0.6),
              fontWeight: 'bold',
              color: colors.white,
            }}>
            Courtney Henry
          </Text>
          <Text
            style={{
              fontSize: moderateScale(19, 0.6),
              color: colors.white,
              alignSelf: 'center',
              marginTop: moderateScale(10, 0.6),
            }}>
            {setVolume ? 'Ringing . . .' : '15.23 Min'}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 120,
          alignSelf: 'center',
          gap: moderateScale(15, 0.3),
        }}>
        <TouchableOpacity
          onPress={() => {
            setITemVolume(!setVolume);
          }}
          style={styles.Volume_Icon}>
          {setVolume ? (
            <Feather
              style={{color: colors.primary}}
              size={25}
              name={'volume-2'}
            />
          ) : (
            <Ionicons
              style={{color: colors.primary}}
              size={25}
              name={'volume-mute-outline'}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Finishorder')
        }}
        style={styles.close_Icon}>
          <Entypo style={{color: colors.white}} size={35} name={'cross'} />
        </TouchableOpacity>
      </View>
    </ImageContainer>
  );
};

export default Callringing;

const styles = StyleSheet.create({
  main_View: {
    alignItems: 'center',
    marginTop: moderateScale(140, 0.6),
  },
  image_Style: {
    width: windowwidth * 0.52,
    height: windowheight * 0.22,
  },
  text_Style: {
    marginVertical: moderateScale(50, 0.6),
  },
  Volume_Icon: {
    width: windowwidth * 0.18,
    height: windowwidth * 0.18,
    borderRadius: (windowwidth * 0.18) / 2,
    backgroundColor: '#26402f',
    alignItems: 'center',
    justifyContent: 'center',

    // top:10

    // height:windowheight *0.25
  },
  close_Icon: {
    width: windowwidth * 0.18,
    height: windowwidth * 0.18,
    borderRadius: (windowwidth * 0.18) / 2,
    backgroundColor: '#FF4B4B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
