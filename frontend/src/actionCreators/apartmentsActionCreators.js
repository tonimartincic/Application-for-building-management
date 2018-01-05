import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchApartments() {
  try {
    const response = await axios.get('/api/apartments');

    return {
      type: types.FETCH_APARTMENTS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_APARTMENTS_FAILURE,
      data: err,
    };
  }
}

export async function fetchApartmentForCurrentUser(id) {
  try {
    const response = await axios.get('/api/apartments/user/' + id);

    return {
      type: types.FETCH_APARTMENT_FOR_CURRENT_USER_SUCCESS,
      data: response.data,
    }
  } catch (err) {
    return {
      type: types.FETCH_APARTMENT_FOR_CURRENT_USER_FAILURE,
      data: err,
    }
  }
}
