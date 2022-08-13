import {combineReducers, createStore, applyMiddleware, Action} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dataReducer from './data/reducers';

const rootReducer = combineReducers({
  data: dataReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['results', 'local'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<typeof store, any, Action>;

export type Store = typeof store;
