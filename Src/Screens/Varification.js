import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ImageContainer from '../Components/ImageContainer'
import { moderateScale } from 'react-native-size-matters'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { color, position } from 'native-base/lib/typescript/theme/styled-system'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import CustomButton from '../Components/CustomButton'

  

  const CELL_COUNT = 4
const Varification = ({navigation}) => {
    const [value, setValue] = useState('')
    const ref = useBlurOnFulfill({value,cellCount: CELL_COUNT})
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,setValue
    })
  return (
    <ImageContainer isImage2={true}>
    <View style={styles.main_View}>
    <View style={{paddingHorizontal:moderateScale(20,0.6)}}>
    <TouchableOpacity onPress={()=>{
            navigation.goBack()
        }} style={styles.arrow_Back}>
          <AntDesign style={{color: colors.orange}} size={20} name={'left'} />
        </TouchableOpacity>
        <View style={styles.main_Text}>
          <Text
            style={{
              fontSize: moderateScale(25, 0.6),
              fontWeight: 'bold',
              color: colors.white,
            }}>
            Enter 4-digit
            Verification code
          </Text>
          </View>
          <View style={styles.sub_heading}>
          <Text
            style={{
              fontSize: moderateScale(12, 0.6),
              fontWeight: '400',
              color: 'grey',
              lineHeight:moderateScale(20,0.3),
            }}>
            Code send to +6282045**** . This code will expired in 01:30
          </Text>
          </View>
          </View>
        <View style={{paddingHorizontal:moderateScale(15,0.6),
        }}>
        <CodeField ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType={'number-pad'}
        textContentType={'oneTimeCode'}
        autoComplete={Platform.select({android:'sms-otp' , default:'one-time-code'})}
        renderCell={
          ({index, symbol, isFocused}) => (
            <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
            </Text>
            
            
          )
        }
        
        
        />
        </View>
        <View style={{height:windowheight *0.51}}>
        <CustomButton onPress={()=>{
          navigation.navigate('Setpassword')
        }} style={{position:'absolute',
          bottom:0
        }} buttontext={'Next'}/>
        </View>
    </View>
    </ImageContainer>
  )
}

export default Varification

const styles = StyleSheet.create({
    main_View:{
        // paddingHorizontal: moderateScale(20, 0.6),
        // marginHorizontal:moderateScale(17,0.6),
        paddingVertical: moderateScale(30, 0.6),
    },
    arrow_Back: {
        width: windowwidth * 0.11,
        height: windowwidth * 0.11,
        borderRadius: (windowwidth * 0.06) / 2,
        backgroundColor: '#1f1109',
        alignItems: 'center',
        justifyContent: 'center',
      },
      main_Text: {
        width: windowwidth * 0.6,
        marginTop: moderateScale(20, 0.6),
      },
      sub_heading:{
        width: windowwidth *0.7,
        marginTop:moderateScale(20,0.6),
      },
      codeFieldRoot:{
       marginTop:moderateScale(30,0.6)
      },
      cell:{
        width:windowwidth *0.21,
        height:moderateScale(75,0.6),
        backgroundColor:'#242322',
        fontSize:moderateScale(28,0.6),
        borderWidth:1,
        // borderRadius:moderateScale(10,0.6),
        borderColor:'#242322',
        color:colors.white,
        textAlign:'center',
        lineHeight:moderateScale(70,0.6),
       
        
      },
      focusCell:{
        borderColor: '#242322',
        
      }

})