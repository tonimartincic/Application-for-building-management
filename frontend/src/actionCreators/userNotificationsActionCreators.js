import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchUserNotifications() {
  try {
    const response = await axios.get('/api/user-notifications');

    return {
      type: types.FETCH_USER_NOTIFICATIONS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_USER_NOTIFICATIONS_FAILURE,
      data: err,
    };
  }
}