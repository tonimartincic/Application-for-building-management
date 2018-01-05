import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function userApartmentReducer(state = initialState.userApartment, action) {
  switch (action.type) {
    case types.FETCH_APARTMENT_FOR_CURRENT_USER_SUCCESS:
      return action.data;

    case types.FETCH_APARTMENT_FOR_CURRENT_USER_FAILURE:
      return state;

    default:
      return state;
  }
}
