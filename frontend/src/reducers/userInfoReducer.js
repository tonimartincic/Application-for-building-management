import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userInfoReducer(state = initialState.userInfoClicked, action) {
  switch (action.type) {
    case types.USER_INFO_TOGGLE:
      return action.value;
    default:
      return state;
  }
}
