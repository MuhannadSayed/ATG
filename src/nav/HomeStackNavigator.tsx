import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GamesContainer from '../components/GamesContainer';
import RaceDetails from '../components/RaceDetails';
import GamesList from '../components/GamesList';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="GamesContainer" component={GamesContainer} />
      {/*  <HomeStack.Screen name="RaceDetails" component={RaceDetails} /> */}
      {/* <HomeStack.Screen name="GamesList" component={GamesList} /> */}
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
