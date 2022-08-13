import * as ActionTypes from './types';

const initalState: ActionTypes.DataState = {
  betData: {
    betType: '',
    tracks: [''],
    startTime: '',
  },
  selectedBetData: {
    betType: '',
    raceNumber: 0,
    raceName: '',
    raceStartTime: '',
  },
  raceHorses: {
    raceName: '',
    startNumber: 0,
    horseName: '',
    driver: '',
  },
  horseDetails: {
    horseName: '',
    trainer: '',
    father: '',
  },
};

function dataReducer(state = initalState, action: ActionTypes.DataActionTypes) {
  switch (action.type) {
    case ActionTypes.DATA_ACTIONS.SET_BET_DATA:
      return {
        ...state,
        betData: {...state.betData, ...action.payload},
      };
    case ActionTypes.DATA_ACTIONS.SET_SELECTED_BET_DATA:
      return {
        ...state,
        selectedBetData: {...state.selectedBetData, ...action.payload},
      };
    case ActionTypes.DATA_ACTIONS.SET_RACE_HORSES:
      return {
        ...state,
        raceHorses: {...state.raceHorses, ...action.payload},
      };
    case ActionTypes.DATA_ACTIONS.SET_HORSE_DETAILS:
      return {
        ...state,
        horseDetails: {...state.horseDetails, ...action.payload},
      };
    default:
      return state;
  }
}

export default dataReducer;
