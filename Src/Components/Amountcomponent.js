import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, windowheight, windowwidth } from '../Utils/theme'
import { moderateScale } from 'react-native-size-matters'
import CustomButton from './CustomButton'
import { color } from 'native-base/lib/typescript/theme/styled-system'

const Amountcomponent = ({onPressitem}) => {
  return (
    <View style={styles.price_Box}>
      <View style={styles.image_Style}>
        <Image style={{
          height:'100%',width:'100%',
        }} source={require('../Assets/Images/amountcardPattern.png')}/>
      </View>
    <View style={styles.sub_Total}>
    <Text style={{fontSize:moderateScale(15,0.6),
      color:colors.white
    }}>Sub-Total</Text>
    <Text style={{fontSize:moderateScale(15,0.6),
      color:colors.white,fontWeight:'bold'
    }}>120 $</Text>
    </View>
    <View style={styles.delivery_Charges}>
    <Text style={{fontSize:moderateScale(15,0.6),
      color:colors.white
    }}>Delivery Charge</Text>
    <Text style={{fontSize:moderateScale(15,0.6),
      color:colors.white,fontWeight:'bold'
    }}>10 $</Text>
    </View>
    <View style={styles.discount}>
    <Text style={{fontSize:moderateScale(15,0.6),
      color:colors.white
    }}>Discount</Text>
    <Text style={{fontSize:moderateScale(15,0.6),
      color:colors.white,fontWeight:'bold'
    }}>20 $</Text>
    </View>
    <View style={styles.total_Amount}>
    <Text style={{fontSize:moderateScale(18,0.6),
      color:colors.white,fontWeight:'bold'
    }}>Total</Text>
    <Text style={{fontSize:moderateScale(18,0.6),
      color:colors.white,fontWeight:'bold'
    }}>150$</Text>
    </View>
    <CustomButton onPress={onPressitem} buttontext={'Place My Order'} buttontext_Style={{color:colors.primary}} style={{backgroundColor:colors.white,
      width:windowwidth*0.87,top:5
    }}/>
    </View>
  )
}

export default Amountcomponent

const styles = StyleSheet.create({
  price_Box:{
    width:windowwidth *0.93,
    height:windowheight *0.26,
    borderRadius:moderateScale(12,0.6),
    paddingHorizontal:moderateScale(25,0.6),
    alignSelf:'center',
    // paddingVertical:moderateScale(18,0.6),
    backgroundColor:colors.primary,
    top:10
  },
  sub_Total:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:moderateScale(18,0.6)
  },
  image_Style:{
    height:windowheight*0.24,
    width:windowwidth *0.9,
    position:'absolute',
    alignSelf:'flex-end',
    borderRadius:moderateScale(12,0.6),
    // backgroundColor:colors.lightgrey,
    
  },
  delivery_Charges:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  total_Amount:{
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'red'
    marginTop:moderateScale(10,0.6)
  },
  discount:{
    flexDirection:'row',
    justifyContent:'space-between',
  }
})