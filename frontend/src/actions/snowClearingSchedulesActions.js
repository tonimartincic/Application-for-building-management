import * as types from './actionTypes';

export const generateClicked = () =>
  ({ type: types.TOGGLE_GENERATE_SNOW_CLEARING_SCHEDULE_BUTTON });

export const approveRequestChangeToggle = () =>
  ({ type: types.TOGGLE_APPROVE_REQUEST_CHANGE });
