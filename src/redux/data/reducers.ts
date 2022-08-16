import * as ActionTypes from './types';

const initalState: ActionTypes.DataState = {
  betData: {
    betType: '',
    img: '',
  },
  selectedRaceData: {
    betId: '',
    raceNumber: 0,
    raceName: '',
    raceStartTime: '',
    raceHorses: [
      {
        startNumber: 0,
        horseName: '',
        driver: '',
        horseDetails: {
          trainer: '',
          father: '',
        },
      },
    ],
  },
  raceArrays: [
    {
      betId: '',
      raceNumber: 0,
      raceName: '',
      raceStartTime: '',
      raceHorses: [
        {
          startNumber: 0,
          horseName: '',
          driver: '',
          horseDetails: {
            trainer: '',
            father: '',
          },
        },
      ],
    },
  ],

  fetchedBet: [
    {
      betId: '',
      tracks: [''],
      startTime: new Date(),
      isExpanded: false,
    },
  ],

  show: false,
};

function dataReducer(state = initalState, action: ActionTypes.DataActionTypes) {
  switch (action.type) {
    case ActionTypes.DATA_ACTIONS.SET_BET_DATA:
      return {
        ...state,
        betData: {...state.betData, ...action.payload},
      };
    case ActionTypes.DATA_ACTIONS.SET_SELECTED_RACE_DATA:
      return {
        ...state,
        selectedRaceData: {...state.selectedRaceData, ...action.payload},
      };
    case ActionTypes.DATA_ACTIONS.SET_RACE_HORSES:
      return {
        ...state,
        raceHorses: {...state.selectedRaceData.raceHorses, ...action.payload},
      };
    case ActionTypes.DATA_ACTIONS.SET_HORSE_DETAILS:
      return {
        ...state,
        horseDetails: {
          ...state.selectedRaceData.raceHorses.horseDetails,
          ...action.payload,
        },
      };
    case ActionTypes.DATA_ACTIONS.SET_FETCHED_BET:
      return {
        ...state,
        fetchedBet: {...state.fetchedBet, ...action.payload},
      };
    case ActionTypes.DATA_ACTIONS.SET_RACE_ARRAYS:
      return {
        ...state,
        raceArrays: {...state.raceArrays, ...action.payload},
      };
    case ActionTypes.DATA_ACTIONS.SET_SHOW_MODAL:
      return {
        ...state,
        show: {...state.show, ...action.payload},
      };
    default:
      return state;
  }
}

export default dataReducer;
