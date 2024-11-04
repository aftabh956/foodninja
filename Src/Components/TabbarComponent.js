import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Homescreen from '../Screens/Homescreen';
import Profile from '../Screens/Profile';
import Cartscreen from '../Screens/Cartscreen';
import Chatscreen from '../Screens/Chatscreen';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {FlatList, Icon} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import { color } from 'native-base/lib/typescript/theme/styled-system';
const TabbarItems = [
  {
    id: 1,
    name: 'Home',
    component: Homescreen,
    icon: 'home',
    as: Foundation,
  },
  {
    id: 2,
    name: 'Profile',
    component: Profile,
    icon: 'user',
    as: Feather,
  },
  {
    id: 3,
    name: 'Cart',
    component: Cartscreen,
    icon: 'shopping-cart',
    as: Feather,
  },
  {
    id: 4,
    name: 'Chat',
    component: Chatscreen,
    icon: 'message1',
    as: AntDesign,
  },
];
const TabbarComponent = ({navigation}) => {
  const [selected_tab, setSelectedTab] = useState(TabbarItems[0]?.id);
  
return (
  
      <View style={styles.tabbar_View}>
        <FlatList
          data={TabbarItems}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.tabbar_Item}
                onPress={() => {
                  setSelectedTab(item)
                  navigation.navigate(item.name);
                }}>
                <Icon color={colors.primary} name={item.icon} as={item.as} size={22} />
                <Text style={{marginLeft: moderateScale(10, 0.6),color:colors.white}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

  );
};

export default TabbarComponent;

const styles = StyleSheet.create({
  tabbar_View: {
    backgroundColor: colors.lightgrey,
    height: windowheight * 0.07,
    borderRadius: moderateScale(12, 0.6),
    marginHorizontal: moderateScale(10, 0.6),
  },
  tabbar_Item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
    // marginHorizontal:moderateScale(10,0.6)
  },
  active_Tabbar:{
    backgroundColor: 'rgba(83, 232, 139, 1)',
    width:windowwidth *0.25,
    height:moderateScale(35,0.6),
    borderRadius:moderateScale(12,0.6)
  }
});

// return (
//   <View style={styles.tab_bar}>
//     <FlatList
//       data={TabbarItems}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       keyExtractor={item => item.id}
//       renderItem={({item}) => {
//         return (
//           <TouchableOpacity
//             onPress={() => {
//               setSelectedTab(item);
//               navigation.navigate(item.name);
//             }}
//             style={
//               selected_tab === item
//                 ? styles.active_tab_view
//                 : styles.inactive_tab_view
//             }>
//             <Icon name={item.icon} as={item.as} size={22} />
//             {selected_tab === item ? (
//                <Text style={{marginLeft: moderateScale(10, 0.6)}}>
//                                  {item.name}
//                              </Text>
//             ) : null}
//           </TouchableOpacity>
//         );
//       }}
//     />
//   </View>
// );
// };

// export default TabbarComponent;

// const styles = StyleSheet.create({
// inactive_tab_view: {
//   justifyContent: 'flex-start',
//   flexDirection: 'row',
//   paddingHorizontal: 10,
//   margin: 10,
//   alignItems: 'center',
  
//   // paddingHorizontal:moderateScale(20,0.6)
// },
// active_tab_view: {
//   justifyContent: 'flex-start',
//   flexDirection: 'row',
//   alignItems: 'center',
//   paddingHorizontal: `10`,
//   margin: 10,
//   backgroundColor: colors.lightgrey,
//   borderRadius: 10,
//   opacity: 0.4,
// },
// tab_bar: {
//   height: 75,
//   backgroundColor:colors.lightgrey,
//   justifyContent: 'flex-start',
// },
// });