import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchFutureCosts() {
  try {
    const response = await axios.get('/api/costs');

    return {
      type: types.FETCH_FUTURE_COSTS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_FUTURE_COSTS_FAILURE,
      data: err,
    };
  }
}

