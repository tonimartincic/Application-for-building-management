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

export async function addNewApartment(apartment) {
  try {
    const response = await axios.post('/api/apartments', apartment);

    return {
      type: types.ADD_NEW_APARTMENT_SUCCESS,
      data: response.data,
    }
  } catch (err) {
    return {
      type: types.ADD_NEW_APARTMENT_FAILURE,
      data: err,
    }
  }
}

export async function deleteApartmentById(id) {
  try {
    const response = await axios.delete('/api/apartment/'+id);

    return {
      type: types.DELETE_APARTMENT_SUCCESS,
      id,
    }
  } catch (err) {
    return {
      type: types.DELETE_APARTMENT_FAILURE,
      data: err,
    }
  }
}
