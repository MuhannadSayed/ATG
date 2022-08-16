import {ImageSourcePropType} from 'react-native';

export interface DataState {
  betData: BetData;
  selectedRaceData: SelectedRaceData;
  fetchedBet: FetchedBet[];
  raceArrays: [SelectedRaceData];
  show: boolean;
}

export interface BetData {
  betType: string;
  img: string;
}

export interface FetchedBet {
  betId: string;
  tracks: string[];
  startTime: Date;
  isExpanded: boolean;
}

export interface SelectedRaceData {
  betId: string;
  raceNumber: number;
  raceName: string;
  raceStartTime: string;
  raceHorses: RaceHorses[];
}

export interface RaceHorses {
  startNumber: number;
  horseName: string;
  driver: string;
  horseDetails: HorseDetails;
}

export interface HorseDetails {
  trainer: string;
  father: string;
}

export interface RawBetData {
  id: string;
  tracks: string[];
  startTime: string;
}
export interface ShowModal {
  show: boolean;
}

export enum DATA_ACTIONS {
  SET_BET_DATA = 'SET_BET_DATA',
  SET_SELECTED_RACE_DATA = 'SET_SELECTED_RACE_DATA',
  SET_RACE_HORSES = 'SET_RACE_HORSES',
  SET_HORSE_DETAILS = 'SET_HORSE_DETAILS',
  SET_FETCHED_BET = 'SET_FETCHED_BET',
  SET_RACE_ARRAYS = 'SET_RACE_ARRAYS',
  SET_SHOW_MODAL = 'SET_SHOW_MODAL',
}

interface SetBetData {
  type: typeof DATA_ACTIONS.SET_BET_DATA;
  payload: BetData;
}
interface SetSelectedRaceData {
  type: typeof DATA_ACTIONS.SET_SELECTED_RACE_DATA;
  payload: SelectedRaceData;
}
interface SetRaceHorses {
  type: typeof DATA_ACTIONS.SET_RACE_HORSES;
  payload: RaceHorses;
}
interface SetHorseDetails {
  type: typeof DATA_ACTIONS.SET_HORSE_DETAILS;
  payload: HorseDetails;
}

interface SetFetchedBet {
  type: typeof DATA_ACTIONS.SET_FETCHED_BET;
  payload: FetchedBet;
}

interface SetRaceArrays {
  type: typeof DATA_ACTIONS.SET_RACE_ARRAYS;
  payload: [SelectedRaceData];
}
interface SetShowModal {
  type: typeof DATA_ACTIONS.SET_SHOW_MODAL;
  payload: boolean;
}

////////////

export type DataActionTypes =
  | SetBetData
  | SetHorseDetails
  | SetRaceHorses
  | SetSelectedRaceData
  | SetRaceArrays
  | SetShowModal
  | SetFetchedBet;
