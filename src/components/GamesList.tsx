import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Animated,
} from 'react-native';

const GamesList = props => {
  const ITEM_SIZE = 30 * 3;
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const fetchBet = (bet: string) => {
    /* setSelectedType(betTypes.find(e => e.betType === bet).img); */
    return fetch(`https://www.atg.se/services/racinginfo/v1/api/games/${bet}`)
      .then(response => response.json())
      .then(json => {
        //const results: any = json.results;
        console.log({json});
        /*  const details: FetchedBet[] = filterData(results); */
        // console.log('filter is : ', filterData(results));
        /*  setBetDetailsList(details); */
        /* results.forEach(element => {
          

          dispatch(DataActions.setFetchedBet(f));
        });
        */
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <View style={{margin: 10, height: 500}}>
      <Animated.FlatList
        data={props.betDetailsList}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriven: true},
        )}
        keyExtractor={item => item.betId}
        showsVerticalScrollIndicator={true}
        /*  ListFooterComponent={<View style={{height: 20}} />} */
        contentContainerStyle={{
          padding: 10,
          paddingTop: StatusBar.currentHeight || 20,
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const scale = scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.5),
          ];
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={{
                flexDirection: 'row',
                backgroundColor: '#87CEEB',
                margin: 10,
                marginBottom: 20,
                padding: 5,
                opacity,
                borderRadius: 10,
                /* shadowColor: 'black',
                shadowOffset: {width: 0, height: 10}, */
                transform: [{scale}],
              }}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {
                  fetchBet(item.betId);
                }}>
                <View>
                  <Image
                    resizeMode="stretch"
                    style={{
                      height: 70,
                      width: 70,
                      borderRadius: 70,
                      marginRight: 10,
                    }}
                    source={props.selectedType}
                  />
                </View>
                <View>
                  <Text style={{fontSize: 22}}>{item.tracks}</Text>
                  <Text style={{fontSize: 17}}>
                    {item.startTime.toString().slice(0, 21)}
                  </Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default GamesList;
