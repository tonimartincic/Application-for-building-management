import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function generateScheduleReducer(state = initialState.generateSchedule, action) {
  switch (action.type) {
    case types.TOGGLE_GENERATE_SNOW_CLEARING_SCHEDULE_BUTTON: {
      const value = state;
      return !value;
    }
    default:
      return state;
  }
}
