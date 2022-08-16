import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {RaceHorses} from '../redux/data/types';

import {useRoute} from '@react-navigation/native';

import {HListScreenRouteProp} from '../nav/types';

const HDetails = () => {
  const route = useRoute<HListScreenRouteProp>();
  const {horses} = route.params;

  const [currentHorses, setCurrentHorses] = useState<RaceHorses[]>(horses);

  useEffect(() => {
    let mount = true;
    if (mount) {
      setCurrentHorses(horses);
    }
    return () => {
      mount = false;
    };
  }, [currentHorses]);

  const Item = ({data}) => (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#87CEEB',
          margin: 10,
          marginBottom: 20,
          padding: 5,
          borderRadius: 10,
        }}>
        <View style={{width: '75%'}}>
          <Text style={{fontSize: 22}}>Häst namn : {data.horseName}</Text>
          <Text style={{fontSize: 17}}>Häst Förare : {data.driver}</Text>
          <Text style={{fontSize: 17}}>
            Häst tränare :{' '}
            {data.horseDetails !== undefined ? data.horseDetails.trainer : null}
          </Text>
          <Text style={{fontSize: 17}}>
            Häst farsa :{' '}
            {data.horseDetails !== undefined ? data.horseDetails.father : null}
          </Text>
        </View>
      </View>
    </View>
  );
  const renderItem = ({item}) => <Item data={item} />;

  return (
    <View>
      <FlatList
        data={currentHorses}
        keyExtractor={item => item.horseName}
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
export default HDetails;
