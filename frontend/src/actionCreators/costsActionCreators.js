import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchCosts() {
  try {
    const response = await axios.get('/api/costs');

    return {
      type: types.FETCH_COSTS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_COSTS_FAILURE,
      data: err,
    };
  }
}

