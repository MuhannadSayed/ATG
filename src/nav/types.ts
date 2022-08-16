import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';

export type HomeStackNavigatorParamList = {
  GContainer: undefined;
  BList: {
    list: any;
    selected: string;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'BList'
>;

export type BListScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'BList'
>;
