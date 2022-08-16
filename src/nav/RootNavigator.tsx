import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeStackNavigator from './HomeStackNavigator';
import {View} from 'react-native';
import GamesContainer from '../components/GamesContainer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();
const RootNavigator = () => {
  console.log('live from root');

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="GamesContainer" component={GamesContainer} />
    </HomeStack.Navigator>
  );
};

export default RootNavigator;
