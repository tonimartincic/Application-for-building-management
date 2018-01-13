import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function buildingsReducer(state = initialState.buildings, action) {
  switch (action.type) {

    case types.FETCH_BUILDINGS_SUCCESS:
      return action.data;

    case types.FETCH_BUILDINGS_FAILURE:
      return state;

    case types.ADD_NEW_BUILDING_SUCCESS:
      return [...state, action.data];

    case types.ADD_NEW_BUILDING_FAILURE:
      return state;

    case types.DELETE_BUILDING_SUCCESS:
      const buildingsWithoutDeletedOne = [];
      for(let i = 0, j = 0; i < state.length; i++) {
        if(state[i].id === action.id) {
          continue;
        }

        buildingsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return buildingsWithoutDeletedOne;

    case types.DELETE_BUILDING_FAILURE:
      return state;

    default:
      return state;
  }
}
