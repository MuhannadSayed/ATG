import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {imagesLinks} from '../assets';
import {BET, COLORS, FONTS, SIZES} from '../constants/index';
import {BetData} from '../redux/data/types';

const BetList = () => {
  const testData: [BetData] = [
    {
      betType: BET.V75,
      tracks: ['1', '2'],
      startTime: 'now',
      img: require('../assets/v75.jpeg'),
    },
    {
      betType: BET.GS75,
      tracks: ['1', '2'],
      startTime: 'now',
      img: require('../assets/gs75.png'),
    },
    {
      betType: BET.V86,
      tracks: ['1', '2'],
      startTime: 'now',
      img: require('../assets/v86.png'),
    },
  ];
  const renderItems = (item: BetData, index: number) => {
    var trendingStyle = {};

    if (index === 0) {
      trendingStyle = {marginLeft: SIZES.padding};
    }

    return (
      <TouchableOpacity
        style={{
          height: 240,
          width: 180,
          justifyContent: 'center',
          marginHorizontal: SIZES.base,

          ...trendingStyle,
        }}
        onPress={() => {
          console.log('selected item is : ', item);

          // setSelectedItem(item);
          //setShowAddToBagModal(true);
        }}>
        <Text style={{color: COLORS.gray, ...FONTS.h5}}>{item.betType}</Text>
        {/* <View
          style={[
            {
              flex: 1,
              justifyContent: 'flex-end',
              marginTop: SIZES.base,
              borderRadius: 10,
              marginRight: SIZES.padding,
              paddingLeft: SIZES.radius,
              paddingRight: SIZES.padding,
              paddingBottom: SIZES.radius,
              //backgroundColor: item.bgColor,
            },
            styles.trendingShadow,
          ]}> */}
        <View style={{height: '35%', justifyContent: 'space-between'}}>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>
            {item.betType}
          </Text>
          {/*  <Text style={{color: COLORS.white, ...FONTS.h3}}>{item.price}</Text> */}
        </View>
        {/* </View> */}
        {/*
        <View
          style={{
            position: 'absolute',
            top: 27,
            right: 0,
            width: '95%',
            height: '100%',
          }}>
          <Svg height="100%" width="100%">
            <Polygon points="0,0 160,0 160,80" fill="white" />
          </Svg>
        </View>
        */}

        <Image
          source={item.img}
          resizeMode="stretch"
          style={{
            position: 'absolute',
            top: 50,
            right: 0,
            width: '98%',
            height: 80,
            // transform: [{rotate: '+15deg'}],
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{height: 260, marginTop: SIZES.radius}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={true}
        data={testData}
        keyExtractor={item => item.betType}
        renderItem={({item, index}) => renderItems(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  recentContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default BetList;
