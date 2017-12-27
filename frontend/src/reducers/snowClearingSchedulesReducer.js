import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function snowClearingSchedulesReducer(state = initialState.snowClearingSchedules, action) {

  const newSchedule = [];

  switch (action.type) {
    case types.FETCH_SNOW_CLEARING_SCHEDULES_SUCCESS:
      return action.data;

    case types.FETCH_SNOW_CLEARING_SCHEDULES_FAILURE:
      return state;

    case types.ASK_CHANGE_SUCCESS: {
      const actionDay = action.data.clearingDate.dayOfMonth;
      const actionMonth = action.data.clearingDate.monthValue;
      const actionYear = action.data.clearingDate.year;

      for (let i = 0; i < state.length; i += 1) {
        if ( actionDay === state[i].clearingDate.dayOfMonth
          && actionMonth===state[i].clearingDate.monthValue
          && actionYear===state[i].clearingDate.year) {
          newSchedule[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newSchedule[i] = Object.assign(
            {},
            state[i]
          );
        }
      }
      return newSchedule;
    }

    case types.ASK_CHANGE_FAILURE:
      return state;

    case types.APPROVE_CHANGE_REQUEST_SUCCESS: {
      return action.data;
    }

    case types.APPROVE_CHANGE_REQUEST_FAILURE:
      return state;

    case types.GENERATE_SNOW_CLEARING_SCHEDULE_SUCCESS: {
      return action.data;
    }
    case types.GENERATE_SNOW_CLEARING_SCHEDULE_FAILURE:
      return state;
    default:
      return state;
  }
}
