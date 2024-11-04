import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import { Image } from 'native-base'
import { moderateScale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'

const TestimonialList = ({data}) => {
  return (
    <View style={styles.box}>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          width: windowwidth * 0.16,
                          height: windowheight * 0.08,
                        }}>
                        <Image
                          style={{width: '100%', height: '100%'}}
                          source={data.Image}
                        />
                      </View>
                      <View style={styles.text_Style}>
                        <Text
                          style={{
                            fontSize: moderateScale(15, 0.6),
                            fontWeight: 'bold',
                            color: colors.white,
                          }}>
                          {data.title}
                        </Text>
                        <Text
                          style={{
                            fontSize: moderateScale(10, 0.6),
                            top: moderateScale(2, 0.3),
                          }}>
                          {data.date}
                        </Text>
                      </View>
                      <View style={styles.staricon_Box}>
                        <AntDesign
                          style={{color: colors.primary}}
                          size={22}
                          name={'star'}
                        />
                        <Text
                          style={{
                            color: colors.primary,
                            fontSize: moderateScale(17, 0.6),
                            marginLeft:moderateScale(5,0.6),
                            fontWeight:'bold'
                          }}>
                          {data.rating}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.subtext_Style}>
                    <Text style={{fontSize:moderateScale(12,0.6),
                          color:colors.white,lineHeight:moderateScale(20,0.6),
                          fontWeight:'300',
                        }}>
                          {data.subtext}
                        </Text>
                    </View>
                  </View>
  )
}

export default TestimonialList

const styles = StyleSheet.create({
    box: {
        height: windowheight * 0.18,
        width: windowwidth * 0.89,
        backgroundColor: colors.lightgrey,
        borderRadius: moderateScale(17, 0.6),
        paddingHorizontal: moderateScale(15, 0.6),
        paddingVertical: moderateScale(10, 0.6),
        marginTop:moderateScale(12,0.6)
      },
      staricon_Box: {
        width: moderateScale(60, 0.6),
        height: moderateScale(36, 0.6),
        backgroundColor: '#26402f',
        borderRadius: moderateScale(20, 0.6),
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(12, 0.6),
        marginTop:moderateScale(8,0.6)
      },
      text_Style: {
        width: windowwidth * 0.46,
        paddingHorizontal: moderateScale(15, 0.6),
        // backgroundColor:'green'
      },
      subtext_Style:{
        width:windowwidth *0.60,
        alignSelf:'flex-end',
    
        // backgroundColor:'green'
        // marginTop:moderateScale(20,0.6)
      }
})