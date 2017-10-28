import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function announcementsReducer(state = initialState.announcements, action) {
  switch (action.type) {
    case types.FETCH_ANNOUNCEMENTS_SUCCESS:
      return action.data;
    case types.FETCH_ANNOUNCEMENTS_FAILURE:
      return state;
    default:
      return state;
  }
}
