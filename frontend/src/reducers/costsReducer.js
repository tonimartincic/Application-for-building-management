import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function costsReducer(state = initialState.costs, action) {
  switch (action.type) {
    case types.FETCH_FUTURE_COSTS_SUCCESS:
      return action.data

    case types.FETCH_FUTURE_COSTS_FAILURE:
      return state;

    case types.ADD_NEW_COST_SUCCESS:
      return [...state, action.data];

    case types.ADD_NEW_COST_FAILURE:
      return state;

    default:
      return state;
  }
}
