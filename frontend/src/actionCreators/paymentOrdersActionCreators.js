import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchPaymentOrders() {
  try {
    const response = await axios.get('/api/payment-orders');

    return {
      type: types.FETCH_PAYMENT_ORDERS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_PAYMENT_ORDERS_FAILURE,
      data: err,
    };
  }
}
