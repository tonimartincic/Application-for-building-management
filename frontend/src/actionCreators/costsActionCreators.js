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

export async function addNewCost(amount, creatorId, description, urgent, status) {
  try {
    const cost =  {
      amount,
      creatorId,
      description,
      urgent,
      status
    };

    const response = await axios.post('/api/costs', cost);

    return {
      type: types.ADD_NEW_COST_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_NEW_COST_FAILURE,
      data: err,
    };
  }
}

export async function editCost(cost) {
  try {
    const response = await axios.put('/api/costs/edit', cost);

    return {
      type: types.EDIT_COST_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_COST_FAILURE,
      data: err,
    };
  }
}

export async function deleteCost(id) {
  try {
    await axios.delete('/api/costs/' + id);

    return {
      type: types.DELETE_COST_SUCCESS,
      id,
    };
  } catch (err) {
    return {
      type: types.DELETE_COST_FAILURE,
      data: err,
    };
  }
}
