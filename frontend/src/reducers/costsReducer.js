import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function costsReducer(state = initialState.costs, action) {
  const newCosts = [];

  switch (action.type) {
    case types.FETCH_FUTURE_COSTS_SUCCESS:
      return action.data

    case types.FETCH_FUTURE_COSTS_FAILURE:
      return state;

    case types.ADD_NEW_COST_SUCCESS:
      return [...state, action.data];

    case types.ADD_NEW_COST_FAILURE:
      return state;

    case types.EDIT_COST_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newCosts[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newCosts[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newCosts;

    case types.EDIT_COST_FAILURE:
      return state;

    case types.DELETE_COST_SUCCESS:
      const costsWithoutDeletedOne = [];
      for(let i = 0, j = 0; i < state.length; i++) {
        if(state[i].id === action.id) {
          continue;
        }

        costsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return costsWithoutDeletedOne;

    case types.DELETE_ANNOUNCEMENTS_FAILURE:
      return state;

    default:
      return state;
  }
}
