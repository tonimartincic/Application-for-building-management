import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchUserNotificationsForUser() {
  try {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const response = await axios.get('/api/user-notifications/'+userId);

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
export async function readNotificationsForUser() {
  try {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const response = await axios.put('/api/user-notifications-read/'+userId);
    console.log(response);
    return {
      type: types.READ_USER_NOTIFICATIONS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.READ_USER_NOTIFICATIONS_FAILURE,
      data: err,
    };
  }
}
