import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageContainer from '../Components/ImageContainer'
import { moderateScale } from 'react-native-size-matters'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Locationcomponent from '../Components/Locationcomponent'
import { color } from 'native-base/lib/typescript/theme/styled-system'
import { useNavigation } from '@react-navigation/native'

const Editpayment = () => {
  const navigation = useNavigation()
  return (
    <ImageContainer isImage2={true}>
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
            Payment 
          </Text>
        </View>
   </View>
   <View style={{bottom:7}}>
   <Locationcomponent image={require('../Assets/Images/paypal.png')}
   style={{height:windowheight *0.10}} text_Color={colors.white} paypal_Container={{bottom:moderateScale(17,0.3)}} isPaypal={true}/>
   <Locationcomponent image={require('../Assets/Images/visa.png')}
    style={{height:windowheight *0.10}} paypal_Container={{bottom:moderateScale(20,0.3)}} isPaypal={true}/>
   <Locationcomponent image={require('../Assets/Images/Payoneer.png')}
   style={{height:windowheight *0.10}} paypal_Container={{bottom:moderateScale(17,0.3)}} isPaypal={true}/>
   </View>
    </ImageContainer>
  )
}

export default Editpayment

const styles = StyleSheet.create({
    main_View: {
        paddingHorizontal: moderateScale(15, 0.6),
        paddingVertical: moderateScale(15, 0.6),
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
        marginTop: moderateScale(10, 0.6),
      },
})