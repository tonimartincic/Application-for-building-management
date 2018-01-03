import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function buildingUsersReducer(state = initialState.buildingUsers, action) {
  switch (action.type) {
    case types.FETCH_BUILDING_USERS_SUCCESS:
      return action.data;
    case types.FETCH_BUILDING_USERS_FAILURE:
      return state;
    default:
      return state;
  }
}
