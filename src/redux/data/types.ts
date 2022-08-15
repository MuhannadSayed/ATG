import {ImageSourcePropType} from 'react-native';

export interface DataState {
  betData: BetData;
  selectedBetData: SelectedBetData;
  raceHorses: RaceHorses;
  horseDetails: HorseDetails;
  fetchedBet: FetchedBet;
}

export interface BetData {
  betType: string;
  img: string;
}

export interface FetchedBet {
  betId: string;
  tracks: string[];
  startTime: Date;
}

export interface SelectedBetData {
  betId: string;
  raceNumber: number;
  raceName: string;
  raceStartTime: string;
}

export interface RaceHorses {
  raceName: string;
  startNumber: number;
  horseName: string;
  driver: string;
}

export interface HorseDetails {
  horseName: string;
  trainer: string;
  father: string;
}

export interface RawBetData {
  id: string;
  tracks: string[];
  startTime: string;
}

export enum DATA_ACTIONS {
  SET_BET_DATA = 'SET_BET_DATA',
  SET_SELECTED_BET_DATA = 'SET_SELECTED_BET_DATA',
  SET_RACE_HORSES = 'SET_RACE_HORSES',
  SET_HORSE_DETAILS = 'SET_HORSE_DETAILS',
  SET_FETCHED_BET = 'SET_FETCHED_BET',
}

interface SetBetData {
  type: typeof DATA_ACTIONS.SET_BET_DATA;
  payload: BetData;
}
interface SetSelectedBetData {
  type: typeof DATA_ACTIONS.SET_SELECTED_BET_DATA;
  payload: SelectedBetData;
}
interface SetRaceHorses {
  type: typeof DATA_ACTIONS.SET_RACE_HORSES;
  payload: RaceHorses;
}
interface SetHorseDetails {
  type: typeof DATA_ACTIONS.SET_HORSE_DETAILS;
  payload: HorseDetails;
}

interface setFetchedBet {
  type: typeof DATA_ACTIONS.SET_FETCHED_BET;
  payload: FetchedBet;
}

////////////

export type DataActionTypes =
  | SetBetData
  | SetHorseDetails
  | SetRaceHorses
  | SetSelectedBetData
  | setFetchedBet;
