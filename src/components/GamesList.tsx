import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';

import {RaceHorses, SelectedRaceData} from '../redux/data/types';

import {useRoute} from '@react-navigation/native';

import {GListScreenRouteProp} from '../nav/types';

const GamesList = () => {
  const route = useRoute<GListScreenRouteProp>();
  const {races} = route.params;

  const [raceArr, setRaceArr] = useState<SelectedRaceData[]>(races);

  const [horses, setHorses] = useState<RaceHorses[]>(races);

  const navigation = useNavigation<GListScreenRouteProp>();

  useEffect(() => {
    let mount = true;

    if (mount) setRaceArr(races);

    return () => {
      mount = false;
    };
  }, raceArr);

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
        }}>
        <View style={{width: '75%'}}>
          <Text style={{fontSize: 22}}>Race namn : {data.raceName}</Text>
          <Text style={{fontSize: 17}}>{data.startTime}</Text>
          <Text style={{fontSize: 17}}>Race Nr : {data.raceNumber}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => <Item data={item} />;

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
