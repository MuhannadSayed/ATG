import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ImageSourcePropType,
  Animated,
  ScrollView,
  Dimensions,
  StatusBar,
  LayoutAnimation,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {imagesLinks} from '../assets';
import {BET, COLORS, ITEM_SIZE, SIZES} from '../constants/index';
import {filterData} from '../controllers/FetchedBetController';
import {DataActions} from '../redux/data';
import {
  BetData,
  FetchedBet,
  HorseDetails,
  RaceHorses,
  RawBetData,
  SelectedRaceData,
} from '../redux/data/types';

import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import {HomeStackNavigatorParamList} from '../nav/types';
import {GListScreenRouteProp} from '../nav/types';
import {RootState} from '../redux/store';
import Collapsible from 'react-native-collapsible';
import RaceDetails from './RaceDetails';
import {
  filterRaceData,
  filterRaceHorse,
} from '../controllers/FetchedRaceController';
import {setHorseDetails} from '../redux/data/actions';

const GamesList = () => {
  const route = useRoute<GListScreenRouteProp>();
  const {races} = route.params;
  // const [currentList, setCurrentList] = useState<FetchedBet[]>(list);
  const [currentBet, setCurrentBet] = useState<FetchedBet>();
  const [show, setShow] = useState<boolean>(true);
  const [raceArr, setRaceArr] = useState<SelectedRaceData[]>(races);
  const [fetchedData, setFetchedData] = useState<any>();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const [horses, setHorses] = useState<RaceHorses[]>(races);
  let fetchedBetArr = useSelector((state: RootState) => {
    return state.data.fetchedBet;
  });
  const navigation = useNavigation<GListScreenRouteProp>();

  //console.log('from muhannad ', fetchedBetArr, 'and list is : ', list);

  const fetchBet = (bet: string) => {
    /* setSelectedType(betTypes.find(e => e.betType === bet).img); */
    return fetch(`https://www.atg.se/services/racinginfo/v1/api/games/${bet}`)
      .then(response => response.json())
      .then(json => {
        //const results: any = json.results;
        console.log({json});
        // console.log('filtered ones', filterRaceData(json));
        //const data = json;
        //console.log('the new data is : ', data);
        console.log('finally', filterRaceData(json));

        setRaceArr(filterRaceData(json));
        //console.log({race});

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

  /* const toggleCollapsed = (index: string) => {
    console.log('hello', currentBet);
    //setCurrentBet(index);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    //setIsCollapsed(!isCollapsed);
    /* const array = [...currentList];
    array.map((value, placeIndex) =>
      placeIndex.toString() === index
        ? (array[placeIndex].isExpanded = !array[placeIndex].isExpanded)
        : (array[placeIndex].isExpanded = false),
    );

    setCurrentList(array); */
  /* let objIndex: number = 46;
    if (currentBet) {
      console.log('shpuld');

      objIndex = currentList.findIndex(e => e.betId === currentBet?.betId);
      currentList[objIndex].isExpanded = !currentList[objIndex].isExpanded;
      setCurrentBet(currentList[objIndex]);
      setRefresh(!refresh);
    }
    console.log({objIndex}); */
  //}; */

  useEffect(() => {
    if (currentBet)
      if (!currentBet.isExpanded && !show) {
        console.log('vvvv', show, currentBet);

        setHeight(null);
        //setShow(true);
        /* const tempBet = currentBet;
        tempBet.isExpanded = true;
        setCurrentBet(tempBet); */
      } else if (currentBet.isExpanded || show) {
        console.log('gsfsfsdfsdf');

        setHeight(0);

        setCurrentBet(null);
      }
  }, [currentBet, show]);
  /* const RaceItem = ({item}) => (
    <View>
      <Text>Race nr : {item.raceNumber}</Text>
      <Text>Race namn : {item.raceName}</Text>
      <Text>Race starttid : {item.raceStartTime}</Text>
    </View>
  ); */
  const Item = ({data}) => (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#87CEEB',
          margin: 10,
          marginBottom: 20,
          padding: 5,
          borderRadius: 10,
        }}
        onPress={() => {
          setHorses(data.raceHorses);
          navigation.push('HList', {
            horses: horses,
          });
          //let h: RaceHorses[] = filterRaceHorse(data);

          //console.log({h});
        }}>
        <View style={{width: '75%'}}>
          <Text style={{fontSize: 22}}>Race namn : {data.raceName}</Text>
          <Text style={{fontSize: 17}}>{data.startTime}</Text>
          <Text style={{fontSize: 17}}>Race Nr : {data.raceNumber}</Text>
          {/* <View>
            {show &&
              data.horses.map((value, index) => {
                console.log({value});

                return raceViews(value);
              })}
          </View> */}
          {/*  <TouchableOpacity
            style={{backgroundColor: 'red'}}
            onPress={() => setShow(true)}>
            <Text>Click here for more information ... </Text>
          </TouchableOpacity>
           */}
        </View>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => <Item data={item} />;
  const raceViews = ({data}) => {
    console.log({data});

    return (
      <View>
        {/* <Text>Horse name : {data.horseName}</Text> */}
        {/* <Text>Race namn : {data.raceName}</Text>
        <Text>Race starttid : {data.raceStartTime}</Text> */}
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={races}
        keyExtractor={item => item.betId}
        renderItem={(item, index) => renderItem(item)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 150,
    width: 150,
    borderRadius: 20,
  },
});
export default GamesList;

//{//<View}
//  style={{
//flex: 1,
//alignContent: 'center',
//alignItems: 'center',
// justifyContent: 'center',
// }}>
//<TouchableOpacity
//onPress={() => {
// console.log({data});
// }}>
//  <Text>{data.tracks[0]}</Text>
//      {<Image
/* style={[styles.center]}
          source={selected}
          resizeMode="stretch"></Image> */ //}
//</TouchableOpacity>
//</View>
//*/
