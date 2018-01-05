import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function userNotificationsReducer(state = initialState.userNotifications, action) {
  switch (action.type) {
    case types.FETCH_USER_NOTIFICATIONS_SUCCESS:
      return action.data;
    case types.FETCH_USER_NOTIFICATIONS_FAILURE:
      return state;
    case types.READ_USER_NOTIFICATIONS_SUCCESS:
      return action.data;
    case types.READ_USER_NOTIFICATIONS_FAILURE:
      return state;
    default:
      return state;
  }
}
