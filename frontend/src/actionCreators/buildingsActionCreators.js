import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchBuildings() {
  try {
    const response = await axios.get('/api/buildings');

    return {
      type: types.FETCH_BUILDINGS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_BUILDINGS_FAILURE,
      data: err,
    };
  }
}

export async function fetchBuildingForCurrentUser() {
  try {
    const id = JSON.parse(localStorage.getItem('user')).id;
    const response = await axios.get('/api/building-by-user-id/'+id);

    return {
      type: types.FETCH_BUILDING_FOR_USER_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_BUILDING_FOR_USER_FAILURE,
      data: err,
    }
  }
}
export async function editBuildingFundsForUser(amount,userId) {
  try {
    const response = await axios.put(`/api/buildings/edit-funds-for-user?amount=${amount}&userId=${userId}`);

    return {
      type: types.EDIT_BUILDING_FUNDS_FOR_USER_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_BUILDING_FUNDS_FOR_USER_FAILURE,
      data: err,
    }
  }
}

