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

