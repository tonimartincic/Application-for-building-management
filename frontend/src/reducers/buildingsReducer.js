import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function buildingsReducer(state = initialState.buildings, action) {
  switch (action.type) {
    case types.FETCH_BUILDINGS_SUCCESS:
      return action.data;
    case types.FETCH_BUILDINGS_FAILURE:
      return state;
    default:
      return state;
  }
}
