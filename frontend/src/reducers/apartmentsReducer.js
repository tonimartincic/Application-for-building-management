import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function apartmentsReducer(state = initialState.apartments, action) {
  switch (action.type) {

    case types.FETCH_APARTMENTS_SUCCESS:
      return action.data;

    case types.FETCH_APARTMENTS_FAILURE:
      return state;

    case types.ADD_NEW_APARTMENT_SUCCESS:
      return [...state, action.data];

    case types.ADD_NEW_APARTMENT_FAILURE:
      return state;

    case types.DELETE_APARTMENT_SUCCESS:
      const apartmentsWithoutDeletedOne = [];
      for(let i = 0, j = 0; i < state.length; i++) {
        if(state[i].id === action.id) {
          continue;
        }

        apartmentsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return apartmentsWithoutDeletedOne;

    case types.DELETE_APARTMENT_FAILURE:
      return state;

    default:
      return state;
  }
}
