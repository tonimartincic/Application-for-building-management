import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function apartmentsReducer(state = initialState.apartments, action) {
  switch (action.type) {
    case types.FETCH_APARTMENTS_SUCCESS:
      return action.data;
    case types.FETCH_APARTMENTS_FAILURE:
      return state;
    default:
      return state;
  }
}
