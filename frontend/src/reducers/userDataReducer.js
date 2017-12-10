import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function userDataReducer(state = initialState.userData, action) {
  switch (action.type) {
    case types.VALIDATE_USER_SUCCESS: {
      if (action.data === '')
        return state;
      return action.data;
    }
    case types.VALIDATE_USER_FAILURE:
      return state;
    case types.FETCH_USER_DATA_SUCCESS: {
      if (action.data === '')
        return state;
      return action.data;
    }
    case types.FETCH_USER_DATA_FAILURE:
      return state;
    default:
      return state;
  }
}
