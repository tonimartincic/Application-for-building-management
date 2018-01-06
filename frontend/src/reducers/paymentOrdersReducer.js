import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function paymentOrdersReducer(state = initialState.paymentOrders, action) {
  const newPaymentOrders = [];

  switch (action.type) {
    case types.FETCH_PAYMENT_ORDERS_SUCCESS:
      return action.data;

    case types.FETCH_PAYMENT_ORDERS_FAILURE:
      return state;

    case types.ADD_NEW_PAYMENT_ORDER_SUCCESS:
      return [...state, action.data];

    case types.ADD_NEW_PAYMENT_ORDER_FAILURE:
      return state;

    case types.EDIT_PAYMENT_ORDER_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newPaymentOrders[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newPaymentOrders[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newPaymentOrders;

    case types.EDIT_PAYMENT_ORDER_FAILURE:
      return state;

    case types.DELETE_PAYMENT_ORDER_SUCCESS:
      const paymentOrdersWithoutDeletedOne = [];
      for(let i = 0, j = 0; i < state.length; i++) {
        if(state[i].id === action.id) {
          continue;
        }

        paymentOrdersWithoutDeletedOne[j] = state[i];
        j++;
      }

      return paymentOrdersWithoutDeletedOne;

    case types.DELETE_PAYMENT_ORDER_FAILURE:
      return state;

    default:
      return state;
  }
}
