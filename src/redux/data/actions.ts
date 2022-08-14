import * as ActionTypes from './types';

export const setBetData = (betData: ActionTypes.BetData) => ({
  type: ActionTypes.DATA_ACTIONS.SET_BET_DATA,
  payload: betData,
});
export const setSelectedBetData = (
  selectedBetData: ActionTypes.SelectedBetData,
) => ({
  type: ActionTypes.DATA_ACTIONS.SET_SELECTED_BET_DATA,
  payload: selectedBetData,
});
export const setHorseDetails = (horseDetails: ActionTypes.HorseDetails) => ({
  type: ActionTypes.DATA_ACTIONS.SET_HORSE_DETAILS,
  payload: horseDetails,
});
export const setRaceHorses = (raceHorses: ActionTypes.RaceHorses) => ({
  type: ActionTypes.DATA_ACTIONS.SET_RACE_HORSES,
  payload: raceHorses,
});
export const setFetchedBet = (fetchedBet: ActionTypes.FetchedBet) => ({
  type: ActionTypes.DATA_ACTIONS.SET_FETCHED_BET,
  payload: fetchedBet,
});

export default {
  setRaceHorses,
  setHorseDetails,
  setSelectedBetData,
  setBetData,
  setFetchedBet,
};
