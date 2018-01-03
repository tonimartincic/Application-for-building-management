import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function buildingUsersReducer(state = initialState.buildingUsers, action) {
  switch (action.type) {
    case types.FETCH_BUILDING_USERS_SUCCESS:
      return action.data;
    case types.FETCH_BUILDING_USERS_FAILURE:
      return state;
    case types.DELETE_BUILDING_USER_SUCCESS:
      const usersWithoutDeletedOne = [];
      for(let i = 0, j = 0; i < state.length; i++) {
        if(state[i] !== null) {
          if(state[i].id === action.id) {
            continue;
          }
        }

        usersWithoutDeletedOne[j] = state[i];
        j++;
      }

      return usersWithoutDeletedOne;

    case types.DELETE_BUILDING_USER_FAILURE:
      return state;
    default:
      return state;
  }
}
