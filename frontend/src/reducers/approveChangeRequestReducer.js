import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function approveChangeRequestReducer(state = initialState.approveChangeRequestClicked, action) {
  switch (action.type) {
    case types.TOGGLE_APPROVE_REQUEST_CHANGE: {
      const value = state;
      return !value;
    }
    default:
      return state;
  }
}
