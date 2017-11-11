import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userInfoReducer(state = initialState.userSettingsClicked, action) {
  switch (action.type) {
    case types.USER_SETTINGS_TOGGLE:
      return action.value;
    default:
      return state;
  }
}
