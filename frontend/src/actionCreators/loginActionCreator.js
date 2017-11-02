import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function validateUser(userId, password) {
  try {
    const user = {
      id: userId,
      firstName: null,
      lastName: null,
      mail: null,
      privilege: null,
      reminder: false,
      password: password,
    };

    const response = await axios.post('/api/login', user);


    debugger;

    return {
      type: types.VALIDATE_USER_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.VALIDATE_USER_FAILURE,
      data: err,
    };
  }
}

