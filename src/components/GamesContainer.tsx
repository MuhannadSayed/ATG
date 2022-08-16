import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import BetList from './BetList';
import GamesList from './GamesList';
import MainBetType from './MainBetType';

const GamesContainer = ({navigation}) => {
  /* const navigation = useNavigation(); */
  console.log('live from container');

  return <MainBetType />;
};

export default GamesContainer;
