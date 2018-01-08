import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function userDataReducer(state = initialState.userData, action) {
  switch (action.type) {
    case types.VALIDATE_USER_SUCCESS: {
      if (action.data === '') {
        return Object.assign({}, state,
          {
            invalidUserNameAndPassword: true,
          });
      }

      return action.data;
    }
    case types.VALIDATE_USER_FAILURE:
      return state
    case types.TOGGLE_REMINDER_VALUE_SUCCESS:
      return action.data;
    case types.TOGGLE_REMINDER_VALUE_FAILURE:
      return state;
    case types.FETCH_USER_DATA_SUCCESS: {
      if (action.data === '')
        return state;
      return action.data;
    }
    case types.FETCH_USER_DATA_FAILURE:
      return state;
    case types.EDIT_USER_INFO_SUCCESS: {
      if (action.data === '' || action.data == null)
        return state;
      return action.data;
    }
    case types.EDIT_USER_INFO_FAILURE:
      return state;
    case types.SET_INVALID_USER_NAME_AND_PASSWORD_VALUE:
      return Object.assign({}, state,
        {
          invalidUserNameAndPassword: action.value,
        });
    default:
      return state;
  }
}
