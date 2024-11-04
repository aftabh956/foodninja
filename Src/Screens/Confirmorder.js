import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageContainer from '../Components/ImageContainer';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Locationcomponent from '../Components/Locationcomponent';
import Amountcomponent from '../Components/Amountcomponent';

const Confirmorder = () => {
  const navigation = useNavigation();
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
            Confirm Order
          </Text>
        </View>
      </View>
      <Locationcomponent
        onPressItem={() => {
          navigation.navigate('Editlocation');
        }}
        text={'Deliver To'}
        isedit_Button={true}
        location_text={'4517 Washington Ave. Manchester, Kentucky 39495'}
      />
      <Locationcomponent
        onPressItem={() => {
          navigation.navigate('Editpayment');
        }}
        style={{height: windowheight * 0.13}}
        paypal_Container={{marginTop: moderateScale(7, 0.3)}}
        isPaypal={true}
        text={'Payment Method'}
        isedit_Button={true}
        image={require('../Assets/Images/paypal.png')}
      />

      <View style={styles.component_Style}>
        <Amountcomponent />
      </View>
    </ImageContainer>
  );
};

export default Confirmorder;

const styles = StyleSheet.create({
  main_View: {
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(20, 0.6),
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
  component_Style: {
    position: 'absolute',
    bottom: moderateScale(40, 0.6),
    alignSelf: 'center',
  },
});
