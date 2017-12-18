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

export async function addNewAnnouncement(content, expirationDate) {
  try {
    const announcement =  {
      content: content,
      expirationDate: expirationDate
    };

    const response = await axios.post('/api/announcements', announcement);

    return {
      type: types.ADD_NEW_ANNOUNCEMENTS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_NEW_ANNOUNCEMENTS_FAILURE,
      data: err,
    };
  }
}

export async function editAnnouncement(announcement) {
  try {
    const response = await axios.post('/api/announcements/edit', announcement);

    return {
      type: types.EDIT_ANNOUNCEMENTS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_ANNOUNCEMENTS_FAILURE,
      data: err,
    };
  }
}

export async function deleteAnnouncement(id) {
  try {
    await axios.delete('/api/announcements/' + id);

    return {
      type: types.DELETE_ANNOUNCEMENTS_SUCCESS,
      id,
    };
  } catch (err) {
    return {
      type: types.DELETE_ANNOUNCEMENTS_FAILURE,
      data: err,
    };
  }
}
