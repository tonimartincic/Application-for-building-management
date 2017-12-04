import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function validateUser(userId, password) {
  try {
    const user = {
      id: 0,
      mail: userId,
      firstName: null,
      lastName: null,
      privilege: null,
      reminder: false,
      password: password,
    };

    const response = await axios.get('/api/login', user);
    const response2 = await axios.get('/api/users/logged');

    return {
      type: types.VALIDATE_USER_SUCCESS,
      data: response2.data,
    };
  } catch (err) {
    return {
      type: types.VALIDATE_USER_FAILURE,
      data: err,
    };
  }
}

