import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function paymentOrdersReducer(state = initialState.paymentOrders, action) {
  switch (action.type) {
    case types.FETCH_PAYMENT_ORDERS_SUCCESS:
      return action.data;
    case types.FETCH_PAYMENT_ORDERS_FAILURE:
      return state;
    default:
      return state;
  }
}
