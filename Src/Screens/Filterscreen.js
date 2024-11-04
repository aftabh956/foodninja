import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageContainer from '../Components/ImageContainer';
import Header from '../Components/Header';
import {colors, windowheight, windowwidth} from '../Utils/theme';
import {moderateScale} from 'react-native-size-matters';
import {FlatList, Select} from 'native-base';
import CustomButton from '../Components/CustomButton';
import { position } from 'native-base/lib/typescript/theme/styled-system';


const Filterscreen = () => {
  const filterList = [
    {
      id: 1,
      categoryText: 'Type',
      categoryItem: [
        {
          id: 1,
          name: 'Restaurant',
        },
        {
          id: 2,
          name: 'Menu',
        },
      ],
    },
    {
      id: 2,
      categoryText: 'Location',
      categoryItem: [
        {
          id: 1,
          name: '1Km',
        },
        {
          id: 2,
          name: '>10 Km',
        },
        {
          id: 3,
          name: '<10 Km',
        },
      ],
    },
    {
      id: 3,
      categoryText: 'Food',
      categoryItem: [
        {
          id: 1,
          name: 'Cake',
        },
        {
          id: 2,
          name: 'Soup',
        },
        {
          id: 3,
          name: 'Main Course',
        },
        {
          id: 4,
          name: 'Main Course',
        },
        {
          id: 5,
          name: 'Main Course',
        },
      ],
    },
  ];

  return (
    <ImageContainer isImage2={true}>
      <Header isRighticon={true} style={{width: windowwidth * 0.88}} />
      <View style={styles.container}>
        <FlatList 
          data={filterList}
          renderItem={({item}) => {
            return (
              <>
                <Text
                  style={{
                    fontSize: moderateScale(15, 0.6),
                    color: colors.white,
                    fontWeight: 'bold',
                    
                  }}>
                  {item.categoryText}
                </Text>
                <FlatList 
                  style={{
                    right: moderateScale(8, 0.3),
                    marginVertical:moderateScale(10,0.6)
                  }}
                  numColumns={item.categoryItem.length > 2 ? 3 : 2}
                  data={item.categoryItem}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity style={styles.button_Style}>
                        <Text style={{fontSize: moderateScale(12, 0.6)}}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </>
            );
          }}
        />
      </View>
      <View style={{height:windowheight *0.20}}>
      <CustomButton style={{width:windowwidth *0.90,position:'absolute',
        bottom:0
      }} buttontext={'Search'}/>
      </View>
      
    </ImageContainer>
  );
};

export default Filterscreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20, 0.6),
  },
  button_Style: {
    backgroundColor: colors.lightgrey,
    paddingVertical: moderateScale(12, 0.6),
    paddingHorizontal: moderateScale(20, 0.6),
    marginLeft: moderateScale(12, 0.6),
    marginVertical:moderateScale(8,0.6),
    borderRadius: moderateScale(12, 0.3),
  },
});
