import React from 'react';
import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {injectStore} from './src/constants/index';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import {RootState} from './src/redux/store';
import {Provider, useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from './src/nav/RootStackParams';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GamesContainer from './src/components/GamesContainer';
import RaceDetails from './src/components/RaceDetails';
import RootNavigator from './src/nav/RootNavigator';
import BetList from './src/components/BetList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigatorParamList} from './src/nav/types';
import GamesList from './src/components/GamesList';
import HorseDetails from './src/components/HDetails';
import HDetails from './src/components/HDetails';
/* const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}; */

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
  // const dispatch = useDispatch();
  // betData
  let betData = useSelector((state: RootState) => {
    return state.data.betData;
  });
  useEffect(() => {
    console.log({betData});
  }, [betData]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
