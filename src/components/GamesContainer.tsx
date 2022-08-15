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

const GamesContainer = () => {
  useEffect(() => {
    console.log('hi ');
  }, []);

  return (
    <View>
      <BetList />
      {/*  <GamesList /> */}
    </View>
  );
};

export default GamesContainer;
