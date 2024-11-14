import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, windowwidth } from '../Utils/theme'
import { moderateScale } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { color } from 'native-base/lib/typescript/theme/styled-system'
import { mode } from 'native-base/lib/typescript/theme/tools'
import { useNavigation } from '@react-navigation/native'

const Headercompt = ({is_Text,text,icon_Name,issearch_Box,onpress}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.header_Style}>
    {is_Text ? <View style={styles.header_Text}>
       <View style={{width:windowwidth*0.82}}>
        <Text style={{fontSize:moderateScale(24,0.3),
            color:colors.black,fontWeight:'bold'
        }}>Hi, Jerel</Text>
        <Text  style={{fontSize:moderateScale(16,0.3),
            color:'#8C8C8C'
        }}>Find your lessons today!</Text>
        </View>
        <TouchableOpacity>
        <Ionicons style={{color:colors.black}} size={24} name={'notifications-outline'}/>
        </TouchableOpacity>
        
        </View> : <View style={styles.maintext_Style}>
            <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}>
            <FontAwesome style={{color:'#2C2C2C'}} size={26} name={'angle-left'}/>
            </TouchableOpacity>
            <Text style={styles.main_Text}>{text}</Text>
            <TouchableOpacity>
            <AntDesign style={{color:'#2C2C2C'}} size={22} name={icon_Name}/>
            </TouchableOpacity>
            </View>} 
    { issearch_Box && <View style={{flexDirection:'row',marginTop:moderateScale(20,0.6)}}>
    <View style={styles.search_Box}>
        <Feather style={{color:'#AEAEAE',width:moderateScale(30,0.3)}} size={23} name={'search'}/>
        <TextInput style={{fontSize:moderateScale(17)}} placeholderTextColor={'#AEAEAE'} placeholder='Search now...'/>
        </View>
        <TouchableOpacity onPress={onpress} style={styles.filter_Box}>
        <Image source={require('../Assets/Images/Filter.png')}/>
        </TouchableOpacity>
        </View>}
    </View>
  )
}

export default Headercompt

const styles = StyleSheet.create({
    header_Style:{
        paddingHorizontal:moderateScale(20,0.6),
        paddingVertical:moderateScale(20,0.6)
    },
    header_Text:{
        flexDirection:'row',alignItems:'center'
    },
    search_Box:{
        width:windowwidth *0.73,
        height:moderateScale(48,0.6),
        flexDirection:'row',
        alignItems:'center',
        borderRadius:moderateScale(15,0.6),
        paddingHorizontal:moderateScale(7,0.6),
        // backgroundColor:'green'
    },
    filter_Box:{
        width:windowwidth *0.12,
        height:windowwidth *0.12,
        borderRadius:moderateScale(10,0.6), 
        backgroundColor: '#3D8FEF',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:moderateScale(12,0.6)
        },
        main_Text:{
            fontSize:moderateScale(18,0.6),
            color:'#2C2C2C',
            fontWeight:'bold'
        },
        maintext_Style:{
// backgroundColor:'green',
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingHorizontal:moderateScale(9,0.6)

        }
})