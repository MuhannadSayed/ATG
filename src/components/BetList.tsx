import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {FetchedBet, SelectedRaceData} from '../redux/data/types';

import {useRoute} from '@react-navigation/native';

import {BListScreenRouteProp} from '../nav/types';

import {filterRaceData} from '../controllers/FetchedRaceController';

const BetList = () => {
  const route = useRoute<BListScreenRouteProp>();
  const {list, selected} = route.params;
  const [currentList, setCurrentList] = useState<FetchedBet[]>(list);
  const [currentBet, setCurrentBet] = useState<FetchedBet>();

  const [raceArr, setRaceArr] = useState<SelectedRaceData[]>();

  const navigation = useNavigation<BListScreenRouteProp>();

  const fetchBet = (bet: string) => {
    return fetch(`https://www.atg.se/services/racinginfo/v1/api/games/${bet}`)
      .then(response => response.json())
      .then(json => {
        setRaceArr(filterRaceData(json));
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    let mount = true;

    if (mount) setCurrentList(list);
  }, [currentList]);

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
          fetchBet(data.betId);
          setCurrentBet(data);
          navigation.push('GList', {
            races: raceArr,
          });
        }}>
        <Image
          resizeMode="stretch"
          style={{
            height: 70,
            width: 70,
            borderRadius: 70,
            marginRight: 10,
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          source={selected}
        />
        <View style={{width: '75%'}}>
          <Text style={{fontSize: 22}}>{data.tracks[0]}</Text>
          <Text style={{fontSize: 17}}>
            {data.startTime.toString().slice(0, 21)}
          </Text>
        </View>
        <View style={{width: '100%'}}></View>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => <Item data={item} />;

  return (
    <View>
      <FlatList
        data={currentList}
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
export default BetList;
