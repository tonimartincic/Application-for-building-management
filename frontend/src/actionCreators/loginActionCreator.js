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

    debugger;
    const response = await axios.post('/api/login', user);
    localStorage.setItem('user', JSON.stringify(response.data));
    //const response2 = await axios.get('/api/users/logged');

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

