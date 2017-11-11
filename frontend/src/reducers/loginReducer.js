import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function loginReducer(state = initialState.userData, action) {
  switch (action.type) {
    case types.VALIDATE_USER_SUCCESS: {
      if (action.data === '')
        return state;
      return action.data;
    }
    case types.VALIDATE_USER_FAILURE:
      return state;
    default:
      return state;
  }
}

