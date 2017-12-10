import axios from 'axios';
import * as types from '../actions/actionTypes';
import { history } from '../ui/components/history';

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
    
    const response = await axios.post('/api/login', user);
    if(response.data !== '') {
      localStorage.setItem('user', JSON.stringify(response.data));
      history.push('/');
    }

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

export async function fetchUserData() {
  try {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const response = await axios.get(`/api/users/${userId}`);

    return {
      type: types.FETCH_USER_DATA_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_USER_DATA_FAILURE,
      data: err,
    };
  }
}
