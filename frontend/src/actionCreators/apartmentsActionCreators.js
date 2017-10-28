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
