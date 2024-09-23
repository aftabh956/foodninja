import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import ImageContainer from '../Components/ImageContainer'
import { Image } from 'native-base'
import { colors, windowheight } from '../Utils/theme'
import CustomButton from '../Components/CustomButton'

const Resetcomplete = ({navigation}) => {
  return (
    <ImageContainer>
        <View style={styles.main_View}>
        <View style={styles.image}>
        <Image source={require('../Assets/Images/selecticon.png')}/>
        </View>
        <View style={styles.congrats_Text}>
            <Text style={{fontSize:moderateScale(30,0.6),
                color:colors.primary,fontWeight:'bold'
            }}>Congrats!</Text>
        </View>
        <Text style={{fontSize:moderateScale(23,0.6),
            color:colors.white,fontWeight:'500',marginTop:moderateScale(10,0.6)
        }}>Password reset succesful</Text>
        <View style={{height:windowheight *0.35}}>
            <CustomButton onPress={()=>{
            navigation.navigate('Loginscreen')
            }} style={{position:'absolute',bottom:0}} buttontext={'Back'}/>
        </View>
        </View>
    </ImageContainer>
  )
}

export default Resetcomplete

const styles = StyleSheet.create({
  main_View:{
    paddingHorizontal:moderateScale(15,0.6),
    alignItems:'center'
},
image:{
   marginTop:moderateScale(180,0.6),
},
congrats_Text:{
marginTop:moderateScale(20,0.6)
}
})