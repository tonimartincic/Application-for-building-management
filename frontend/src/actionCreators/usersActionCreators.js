import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchUsers() {
  try {
    const response = await axios.get('/api/users');

    return {
      type: types.FETCH_USERS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_USERS_FAILURE,
      data: err,
    };
  }
}
