import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchAnnouncements() {
  try {
    const response = await axios.get('/api/announcements');

    return {
      type: types.FETCH_ANNOUNCEMENTS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_ANNOUNCEMENTS_FAILURE,
      data: err,
    };
  }
}

export async function addNewAnnouncement() {
  try {
    const response = await axios.get('/api/announcements');

    return {
      type: types.FETCH_ANNOUNCEMENTS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_ANNOUNCEMENTS_FAILURE,
      data: err,
    };
  }
}
