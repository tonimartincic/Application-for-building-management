import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function costsReducer(state = initialState.costs, action) {
  switch (action.type) {
    case types.FETCH_COSTS_SUCCESS:
      return action.data;
    case types.FETCH_COSTS_FAILURE:
      return state;
    default:
      return state;
  }
}
