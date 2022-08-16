import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {BET_TYPES} from '../constants';
import {filterData} from '../controllers/FetchedBetController';
import {FetchedBet} from '../redux/data/types';
import {useNavigation} from '@react-navigation/native';

export type StackNavigation = StackNavigationProp<StackParamList>;

import {HomeScreenNavigationProp} from '../nav/types';
import {DataActions} from '../redux/data';
import {useDispatch} from 'react-redux';

const MainBetType = () => {
  const [betDetailsList, setBetDetailsList] = useState<FetchedBet[]>();
  const [selectedType, setSelectedType] = useState<string>('');
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch();

  const fetchBet = (bet: string) => {
    setSelectedType(BET_TYPES.find(e => e.betType === bet).img);
    setBetDetailsList([]);
    return fetch(
      `https://www.atg.se/services/racinginfo/v1/api/products/${bet}`,
    )
      .then(response => response.json())
      .then(json => {
        const results: any = json.results;

        const details: FetchedBet[] = filterData(results);

        setBetDetailsList(details);
        dispatch(DataActions.setFetchedBet(details));

        navigation.push('BList', {
          list: betDetailsList,
          selected: selectedType,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const Item = ({data}) => (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          fetchBet(data.betType);
        }}>
        <Image
          style={[styles.center]}
          source={data.img}
          resizeMode="stretch"></Image>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => <Item data={item} />;

  return (
    <View>
      <FlatList
        data={BET_TYPES}
        keyExtractor={item => item.betType}
        renderItem={renderItem}
      />
      <Text>Av : Muhannad </Text>
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
export default MainBetType;
