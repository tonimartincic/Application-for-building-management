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

export async function addNewUser(firstName, lastName, eMail, privilege) {
  try {
    const user = {
      firstName: firstName,
      lastName: lastName,
      mail: eMail,
      privilege: privilege,
      password: 12345,
    };

    const response = await axios.post('/api/users', user);

    return {
      type: types.ADD_NEW_USER_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_NEW_USER_FAILURE,
      data: err,
    }
  }

}
