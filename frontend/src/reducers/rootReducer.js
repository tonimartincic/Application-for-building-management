import {combineReducers} from 'redux';
import announcementsReducer from './announcementsReducer';
import apartmentsReducer from "./apartmentsReducer";
import buildingsReducer from "./buildingsReducer";
import costsReducer from "./costsReducer";
import paymentOrdersReducer from "./paymentOrdersReducer";
import snowClearingSchedulesReducer from "./snowClearingSchedulesReducer";
import userNotificationsReducer from "./userNotificationsReducer";
import usersReducer from "./usersReducer";
import userInfoReducer from './userInfoReducer';
import userSettingsReducer from './userSettingsReducer';
import userDataReducer from './userDataReducer';
import generateScheduleReducer from './generateScheduleReducer';
import approveChangeRequestReducer from "./approveChangeRequestReducer";
import buildingUsersReducer from "./buildingUsersReducer";
import userApartmentReducer from "./userApartmentReducer";

const rootReducer = combineReducers({
  userData: userDataReducer,
  announcements: announcementsReducer,
  apartments: apartmentsReducer,
  buildings: buildingsReducer,
  costs: costsReducer,
  paymentOrders: paymentOrdersReducer,
  snowClearingSchedules: snowClearingSchedulesReducer,
  userNotifications: userNotificationsReducer,
  users: usersReducer,
  userInfoClicked: userInfoReducer,
  userSettingsClicked: userSettingsReducer,
  generateSchedule: generateScheduleReducer,
  approveChangeRequestClicked: approveChangeRequestReducer,
  buildingUsers: buildingUsersReducer,
  userApartment: userApartmentReducer,
});

export default rootReducer;
