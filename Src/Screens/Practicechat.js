import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const Practicechat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Yeah i know i am in the same position',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'john',
          avatar:require('../Assets/Images/riderPhoto1.png'),
        },
      },
      {
        _id: 3,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 4,
          name: 'chris',
          avatar:require('../Assets/Images/riderPhoto2.png') ,
        },
      },
    ]);
  }, []);

 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
      <SafeAreaView>
    <View style={styles.main_View} >
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: moderateScale(15, 0.6),
          }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: moderateScale(14, 0.3),
                color: colors.lightgrey,
              }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: moderateScale(14, 0.3),
                color: colors.lightgrey,
              }}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.maintext_Style}>
          <Text style={styles.main_Text}>Tannaz Sadeghi</Text>
          <View style={{flexDirection: 'row', gap: moderateScale(12, 0.3)}}>
            <TouchableOpacity style={styles.circle}>
              <Ionicons style={{color: colors.black}} size={20} name={'call'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
              <Feather style={{color: colors.black}} size={20} name={'video'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.chat_Box}>
        <GiftedChat
        alwaysShowSend={true}
          renderSend={props => {
            return (
              <Send
                {...props}
                children={
                  <Ionicons
                    style={{color: colors.black}}
                    size={20}
                    name={'send'}
                  />
                }
                sendButtonProps={{
                  style: {
                    // alignSelf:'center',
                    width:windowwidth*0.1,height:windowwidth*0.1,
                    borderRadius:windowwidth*0.1/2,backgroundColor: 'rgba(13, 13, 13, 0.2)',
                    marginRight:moderateScale(15,0.3),alignItems:'center',justifyContent:'center'
                  },
                }}
                ></Send>
            );
          }}
          renderInputToolbar={props => {
            return(
            <InputToolbar
              {...props}
              containerStyle={{
                width: windowwidth * 0.90,
                height: moderateScale(50, 0.3),
                backgroundColor: colors.primary,
                borderRadius: moderateScale(15, 0.3),
                alignSelf: 'center',
                bottom:15
              }}></InputToolbar>
            )
            }}
            textInputStyle={{
              color: Colors.black,
             
              // marginTop: moderateScale(5, 0.3),
            }}
            placeholderTextColor={Colors.black}
           
          messages={messages}
          renderBubble={props => {
            return (
              <Bubble
                wrapperStyle={{
                  left: {
                    backgroundColor: colors.primary,
                  },
                  right: {
                    backgroundColor: colors.white,
                  },
                }}
                {...props}textStyle={{
                  right: {
                    color: colors.black,
                  },
                }} containerStyle={{
                  left:{
                    position:'absolute',alignSelf:'flex-start',left:moderateScale(40,0.6)
                  },
                  right:{
                    marginTop:moderateScale(10,0.3)
                  }
                }} ></Bubble>
            );
          }}
          isTyping={false}
          onSend={text => onSend(text)}
          alignTop={true}
          user={{
            _id: 2,
            name: 'John',
            avatar: require('../Assets/Images/riderPhoto1.png'),
          }}
          showUserAvatar={true}
        
        />
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Practicechat;

const styles = StyleSheet.create({
  main_View:{
   width:windowwidth,
   height:windowheight,
   backgroundColor:colors.primary
  },
  header: {
    width: windowwidth,
    height: '20%',
    backgroundColor: colors.primary,
    paddingHorizontal: moderateScale(25, 0.6),
    // paddingVertical: moderateScale(20, 0.6),
  },
  chat_Box: {
   width:windowwidth,
   height:'80%',
    backgroundColor: colors.black,
    borderTopRightRadius: moderateScale(30, 0.6),
    borderTopLeftRadius:moderateScale(30,0.6),
    paddingVertical: moderateScale(20, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    // position:'absolute'
  },
  main_Text: {
    fontSize: moderateScale(26, 0.3),
    color: colors.black,
    fontWeight: 'bold',
    width: windowwidth * 0.27,
    // backgroundColor:'red'
  },
  circle: {
    width: windowwidth * 0.09,
    height: windowwidth * 0.09,
    borderRadius: (windowwidth * 0.08) / 2,
    backgroundColor: 'rgba(13, 13, 13, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext_Style: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(15, 0.3),
  },
});
