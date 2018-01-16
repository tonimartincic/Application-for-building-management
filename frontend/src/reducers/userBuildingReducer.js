import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function userBuildingReducer(state = initialState.userBuilding, action) {
  switch (action.type) {
    case types.FETCH_BUILDING_FOR_USER_SUCCESS:
      return action.data;

    case types.FETCH_BUILDING_FOR_USER_FAILURE:
      return state;

    case types.EDIT_BUILDING_FUNDS_FOR_USER_SUCCESS:
      return action.data;

    case types.EDIT_BUILDING_FUNDS_FOR_USER_FAILURE:
      return state;

    default:
      return state;
  }
}
