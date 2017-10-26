import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function buildingReducer (state = initialState.building, action) {
  switch (action.type) {
    case types.FETCH_BUILDING_INFO_SUCCESS: {
      debugger;
      return action.data;
    }
    case types.FETCH_BUILDING_INFO_FAILURE: {
      return state;
    }
    default:
      return state
  }

}
