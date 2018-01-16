import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchPaymentOrders() {
  try {
    const currentUserId = JSON.parse(localStorage.getItem('user')).id;
    const response = await axios.get('/api/payment-orders/current-user/' + currentUserId);

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

export async function addNewPaymentOrder(paymentOrder) {
  try {
    const response = await axios.post('/api/payment-orders', paymentOrder);

    return {
      type: types.ADD_NEW_PAYMENT_ORDER_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_NEW_PAYMENT_ORDER_FAILURE,
      data: err,
    };
  }
}

export async function editPaymentOrder(paymentOrder) {
  try {
    const response = await axios.put('/api/payment-orders/edit', paymentOrder);

    return {
      type: types.EDIT_PAYMENT_ORDER_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_PAYMENT_ORDER_FAILURE,
      data: err,
    };
  }
}

export async function deletePaymentOrder(id) {
  try {
    await axios.delete('/api/payment-orders/' + id);

    return {
      type: types.DELETE_PAYMENT_ORDER_SUCCESS,
      id,
    };
  } catch (err) {
    return {
      type: types.DELETE_PAYMENT_ORDER_FAILURE,
      data: err,
    };
  }
}
