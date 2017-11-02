import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function loginReducer(state = initialState.userData, action) {
  debugger;
  switch (action.type) {
    case types.VALIDATE_USER_SUCCESS:
      return action.data;
    case types.VALIDATE_USER_FAILURE:
      return state;
    default:
      return state;
  }
}
