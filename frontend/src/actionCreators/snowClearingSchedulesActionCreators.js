import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchSnowClearingSchedules() {
  try {
    const response = await axios.get('/api/snow-clearing-schedules');

    return {
      type: types.FETCH_SNOW_CLEARING_SCHEDULES_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_SNOW_CLEARING_SCHEDULES_FAILURE,
      data: err,
    };
  }
}

export async function generateSnowClearingSchedule(from, to) {
  try {

    const response = await axios.post(`/api/snow-clearing-schedules/create?from=${from}&to=${to}`);

    return {
      type: types.GENERATE_SNOW_CLEARING_SCHEDULE_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.GENERATE_SNOW_CLEARING_SCHEDULE_FAILURE,
      data: err,
    };
  }
}
