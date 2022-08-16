import * as ActionTypes from './types';

export const setBetData = (betData: ActionTypes.BetData) => ({
  type: ActionTypes.DATA_ACTIONS.SET_BET_DATA,
  payload: betData,
});
export const setSelectedRaceData = (
  selectedRaceData: ActionTypes.SelectedRaceData,
) => ({
  type: ActionTypes.DATA_ACTIONS.SET_SELECTED_RACE_DATA,
  payload: selectedRaceData,
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
export const setRaceArrays = (raceArrays: [ActionTypes.SelectedRaceData]) => ({
  type: ActionTypes.DATA_ACTIONS.SET_RACE_ARRAYS,
  payload: raceArrays,
});
export const setShowModal = (show: [boolean]) => ({
  type: ActionTypes.DATA_ACTIONS.SET_SHOW_MODAL,
  payload: show,
});

export default {
  setRaceHorses,
  setHorseDetails,
  setSelectedRaceData,
  setBetData,
  setFetchedBet,
  setShowModal,
  setRaceArrays,
};
