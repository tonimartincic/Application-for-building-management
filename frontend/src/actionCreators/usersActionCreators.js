import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchBuildingUsersById(id) {
  try {
    const response = await axios.get('/api/building-users/'+id);

    return {
      type: types.FETCH_BUILDING_USERS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_BUILDING_USERS_FAILURE,
      data: err,
    }
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

export async function editUserInfo(user) {
  try {
    const response = await axios.post('/api/users/edit', user);

    return {
      type: types.EDIT_USER_INFO_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_USER_INFO_FAILURE,
      data: err,
    };
  }
}

export async function deleteUser(id) {
  try {
    await axios.delete('/api/users/' + id);

    return {
      type: types.DELETE_USER_SUCCESS,
      id,
    };
  } catch (err) {
    return {
      type: types.DELETE_USER_FAILURE,
      data: err,
    };
  }
}
