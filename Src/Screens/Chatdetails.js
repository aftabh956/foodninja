import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ImageContainer from '../Components/ImageContainer';
import {moderateScale} from 'react-native-size-matters';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Bubble,
  Composer,
  GiftedChat,
  InputToolbar,
  Send,
} from 'react-native-gifted-chat';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {Icon} from 'native-base';

const Chatdetails = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  // console.log('aftab',value)
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'john',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 3,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 4,
          name: 'chris',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log('pressed', messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <ImageContainer>
      <View style={styles.main_View}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.arrow_Back}>
          <AntDesign style={{color: colors.orange}} size={20} name={'left'} />
        </TouchableOpacity>
        <View style={styles.main_Text}>
          <Text
            style={{
              fontSize: moderateScale(25, 0.6),
              fontWeight: 'bold',
              color: colors.white,
            }}>
            Chat
          </Text>
        </View>

        <View style={styles.header}>
          <View style={styles.image_Style}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../Assets/Images/riderPhoto1.png')}
            />
          </View>
          <View style={{width: windowwidth * 0.44}}>
            <Text
              style={{fontSize: moderateScale(15, 0.6), color: colors.white}}>
              Dianne Russell
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.online_Icon}></View>
              <Text style={{marginLeft: moderateScale(5, 0.6)}}>Online</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('callringing');
            }}
            style={styles.call_Icon}>
            <FontAwesome5 size={20} name={'phone-alt'} />
          </TouchableOpacity>
        </View>
        {/* <ScrollView> */}
      </View>
      <GiftedChat
        alwaysShowSend={true}
        renderSend={props => {
          return (
            <Send
              children={
                <Icon
                  name="send"
                  as={Feather}
                  style={{color: colors.primary}}
                  size={moderateScale(22, 0.3)}
                />
              }
              sendButtonProps={{
                style: {
                  alignSelf: 'center',
                  marginRight: moderateScale(20, 0.2),
                },
              }}
              {...props}></Send>
          );
        }}
        renderInputToolbar={props => (
          <InputToolbar
            {...props}
            containerStyle={{
              justifyContent:'center',
            
              alignItems: 'center',
              backgroundColor: colors.lightgrey,

              height: moderateScale(70, 0.6),

              marginHorizontal: moderateScale(10, 0.6),
              borderRadius: moderateScale(15, 0.6),
              bottom: 30,

              borderColor: colors.lightgrey,
            }}></InputToolbar>
        )}
        textInputStyle={{
          color: Colors.white,
          // marginTop: moderateScale(5, 0.3),
        }}
        placeholderTextColor={Colors.lightgrey}
        messages={messages}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                left: {
                  backgroundColor: colors.lightgrey,
                },
                right: {
                  backgroundColor: colors.primary,
                },
              }}
              textStyle={{
                left: {
                  color: colors.white,
                },
              }} 
              containerStyle={{ left:{
              alignSelf:'flex-start',position:'absolute',
                left:10
              },
              right:{
                right:10
              }
              }}
              ></Bubble>
          );
        }}
        isTyping={false}
        onSend={text => onSend(text)}
        alignTop={true}
        key={item => item?.id}
        user={{
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        }}
      />
      {/* </ScrollView> */}
    </ImageContainer>
  );
};

export default Chatdetails;

const styles = StyleSheet.create({
  main_View: {
    paddingHorizontal: moderateScale(20, 0.6),
    // marginTop:moderateScale(30,0.6),
    paddingVertical: moderateScale(25, 0.6),
  },
  arrow_Back: {
    width: windowwidth * 0.11,
    height: windowwidth * 0.11,
    borderRadius: (windowwidth * 0.06) / 2,
    backgroundColor: '#1f1109',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: windowwidth * 0.92,
    height: windowheight * 0.13,
    backgroundColor: 'rgba(36, 35, 34, 0.3)',
    borderRadius: moderateScale(15, 0.6),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(18, 0.6),
    marginTop: moderateScale(15, 0.6),
  },
  main_Text: {
    marginTop: moderateScale(15, 0.6),
  },
  image_Style: {
    width: windowwidth * 0.2,
    height: windowheight * 0.1,
    // backgroundColor:'red'
  },
  online_Icon: {
    width: windowwidth * 0.02,
    height: windowwidth * 0.02,
    borderRadius: (windowwidth * 0.02) / 2,
    backgroundColor: colors.primary,
  },
  call_Icon: {
    width: windowwidth * 0.1,
    height: windowwidth * 0.1,
    borderRadius: (windowwidth * 0.1) / 2,
    backgroundColor: colors.lightgrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_Style: {
    width: windowwidth * 0.94,
    height: windowheight * 0.1,
    backgroundColor: colors.lightgrey,
    alignSelf: 'center',
    borderRadius: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(18, 0.6),
    justifyContent: 'center',
    marginBottom: moderateScale(22, 0.6),
    // alignItems:'center'
  },
  bubble_Style: {
    width: windowwidth * 0.25,
    backgroundColor: colors.primary,
  },
});
