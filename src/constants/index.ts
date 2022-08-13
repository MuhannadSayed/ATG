import {Store} from '../redux/store';
export const BET = {
  V75: 'V75',
  V86: 'V86',
  GS75: 'GS75',
};
let store: Store;
export const injectStore = (_store: any) => {
  store = _store;
};
