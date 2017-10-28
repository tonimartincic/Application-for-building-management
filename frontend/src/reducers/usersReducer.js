import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return action.data;
    case types.FETCH_USERS_FAILURE:
      return state;
    default:
      return state;
  }
}
