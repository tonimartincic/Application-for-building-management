import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function announcementsReducer(state = initialState.announcements, action) {
  const newAnnouncements = [];

  switch (action.type) {
    case types.FETCH_ANNOUNCEMENTS_SUCCESS:
      return action.data;

    case types.FETCH_ANNOUNCEMENTS_FAILURE:
      return state;

    case types.ADD_NEW_ANNOUNCEMENTS_SUCCESS:
      return [...state, action.data];
    
    case types.ADD_NEW_ANNOUNCEMENTS_FAILURE:
      return state;

    case types.EDIT_ANNOUNCEMENTS_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newAnnouncements[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newAnnouncements[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newAnnouncements;

    case types.EDIT_ANNOUNCEMENTS_FAILURE:
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

    case types.SET_EDIT_ANNOUNCEMENT_BUTTON_CLICKED:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.id) {
          newAnnouncements[i] = Object.assign(
            {},
            {
              id: state[i].id,
              user: state[i].user,
              creationDate: state[i].creationDate,
              expirationDate: state[i].expirationDate,
              content: state[i].content,
              editClicked: action.value,
            },
          );
        } else {
          newAnnouncements[i] = Object.assign(
            {},
            {
              id: state[i].id,
              user: state[i].user,
              creationDate: state[i].creationDate,
              expirationDate: state[i].expirationDate,
              content: state[i].content,
              editClicked: false,
            },
          );
        }
      }

      return newAnnouncements;

    default:
      return state;
  }
}
