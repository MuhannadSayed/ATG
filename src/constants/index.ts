import {Store} from '../redux/store';
import {Dimensions} from 'react-native';
import {BetData} from '../redux/data/types';
export const BET = {
  V75: 'V75',
  V86: 'V86',
  GS75: 'GS75',
};
let store: Store;
export const injectStore = (_store: any) => {
  store = _store;
};
export const ITEM_SIZE = 30 * 3;
export const BET_TYPES: BetData[] = [
  {
    betType: BET.V75,
    img: require('../assets/v75.jpeg'),
  },
  {
    betType: BET.GS75,
    img: require('../assets/gs75.png'),
  },
  {
    betType: BET.V86,
    img: require('../assets/v86.png'),
  },
];

const {width, height} = Dimensions.get('window');
