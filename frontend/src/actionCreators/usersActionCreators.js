import axios from 'axios';
import * as types from '../actions/actionTypes';
import { ADMINISTRATOR, CONTRACTOR} from "../constants/values";

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

export async function fetchBuildingUsersForCurrentUser() {
  try {
    const id = JSON.parse(localStorage.getItem('user')).id;
    const response = await axios.get('/api/building-users-current/' + id);

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

export async function fetchUsers() {
  try {
    const response = await axios.get('/api/users');

    return {
      type: types.FETCH_USERS_SUCCESS,
      data: response.data,
    }

  } catch (err) {
    return {
      type: types.FETCH_USERS_FAILURE,
      data: err
    }
  }
}

export async function addNewUser(firstName, lastName, eMail, privilege, id) {
  try {
    const user = {
      firstName: firstName,
      lastName: lastName,
      mail: eMail,
      privilege: privilege,
      password: 12345,
    };

    const response = await axios.post('/api/users/'+id, user);

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

export async function addNewAdministrator(firstName, lastName, eMail) {
  try {
    const user = {
      firstName: firstName,
      lastName: lastName,
      mail: eMail,
      privilege: ADMINISTRATOR
    };

    const response = await axios.post('/api/users/administrator', user);

    return {
      type: types.ADD_NEW_ADMINISTRATOR_SUCCESS,
      data: response.data,
    }
  } catch (err) {
    return {
      type: types.ADD_NEW_ADMINISTRATOR_FAILURE,
      data: err,
    }
  }
}

export async function addNewContractor(firstName, lastName, eMail) {
  try {
    const user = {
      firstName: firstName,
      lastName: lastName,
      mail: eMail,
      privilege: CONTRACTOR
    };

    const response = await axios.post('/api/users/contractor', user);

    return {
      type: types.ADD_NEW_CONTRACTOR_SUCCESS,
      data: response.data,
    }
  } catch (err) {
    return {
      type: types.ADD_NEW_CONTRACTOR_FAILURE,
      data: err,
    }
  }
}

export async function editUserInfo(user) {
  try {
    const response = await axios.put('/api/users/edit', user);
    localStorage.setItem('user', JSON.stringify(response.data));

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

export async function editUserPassword(user) {
  try {
    const response = await axios.put('/api/users/edit-password', user);
    localStorage.setItem('user', JSON.stringify(response.data));

    return {
      type: types.EDIT_USER_PASSWORD_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_USER_PASSWORD_FAILURE,
      data: err,
    };
  }
}

export async function editUserFromBuildingInfo(user) {
  try {
    const response = await axios.post('/api/users/edit', user);

    return {
      type: types.EDIT_BUILDING_USER_INFO_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_BUILDING_USER_INFO_FAILURE,
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

export async function deleteUserFromBuilding(id) {
  try {
    await axios.delete('/api/users/' + id);

    return {
      type: types.DELETE_BUILDING_USER_SUCCESS,
      id,
    };
  } catch (err) {
    return {
      type: types.DELETE_BUILDING_USER_FAILURE,
      data: err,
    };
  }
}

