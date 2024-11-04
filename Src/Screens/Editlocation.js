import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageContainer from '../Components/ImageContainer'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Locationcomponent from '../Components/Locationcomponent'

const Editlocation = () => {
    const navigation=useNavigation()
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
            Shipping
          </Text>
        </View>
        
    </View>
    <Locationcomponent location_text={'8502 Preston Rd. Inglewood, Maine 98380'}
    text_Style={{width:windowwidth *0.65}} text={'Order Location'}  />
    <Locationcomponent location_text={'4517 Washington Ave. Manchester, Kentucky 39495'} text={'Deliver To'} isLocationbutton={true} style={{height:windowheight*0.17}}/>
    </ImageContainer>
  )
}

export default Editlocation

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