import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function snowClearingSchedulesReducer(state = initialState.snowClearingSchedules, action) {
  switch (action.type) {
    case types.FETCH_SNOW_CLEARING_SCHEDULES_SUCCESS:
      return action.data;
    case types.FETCH_SNOW_CLEARING_SCHEDULES_FAILURE:
      return state;
    default:
      return state;
  }
}
