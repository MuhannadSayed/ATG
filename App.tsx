import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {injectStore} from './src/constants/index';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import GamesContainer from './src/components/GamesContainer';

import BetList from './src/components/BetList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigatorParamList} from './src/nav/types';
import GamesList from './src/components/GamesList';

import HDetails from './src/components/HDetails';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  injectStore(store);

  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="GContainer"
          component={GamesContainer}
          options={{title: 'Welcome'}}
        />
        <HomeStack.Screen
          name="BList"
          component={BetList}
          options={{title: 'Välj Bet'}}
        />
        <HomeStack.Screen
          name="GList"
          component={GamesList}
          options={{title: 'Spel detaljer'}}
        />
        <HomeStack.Screen
          name="HList"
          component={HDetails}
          options={{title: 'Hästar'}}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default AppWrapper;
