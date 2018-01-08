import * as types from './actionTypes';

export const setEditAnnouncementButtonClicked = (id, value) =>
  ({ type: types.SET_EDIT_ANNOUNCEMENT_BUTTON_CLICKED, id, value });
