import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function announcementsReducer(state = initialState.announcements, action) {
  switch (action.type) {
    case types.FETCH_ANNOUNCEMENTS_SUCCESS:
      return action.data;

    case types.FETCH_ANNOUNCEMENTS_FAILURE:
      return state;

    case types.ADD_NEW_ANNOUNCEMENTS_SUCCESS:
      return [...state, action.data];

    case types.ADD_NEW_ANNOUNCEMENTS_FAILURE:
      return state;

    case types.DELETE_ANNOUNCEMENTS_SUCCESS:
      const announcementsWithoutDeletedOne = [];
      for(let i = 0, j = 0; i < state.length; i++) {
        if(state[i].id === action.id) {
          continue;
        }

        announcementsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return announcementsWithoutDeletedOne;

    case types.DELETE_ANNOUNCEMENTS_FAILURE:
      return state;

    default:
      return state;
  }
}
