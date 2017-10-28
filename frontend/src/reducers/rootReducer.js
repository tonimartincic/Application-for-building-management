import {combineReducers} from 'redux';
import announcementsReducer from './announcementsReducer';
import apartmentsReducer from "./apartmentsReducer";
import buildingsReducer from "./buildingsReducer";
import costsReducer from "./costsReducer";
import paymentOrdersReducer from "./paymentOrdersReducer";
import snowClearingSchedulesReducer from "./snowClearingSchedulesReducer";
import userNotificationsReducer from "./userNotificationsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  announcements: announcementsReducer,
  apartments: apartmentsReducer,
  buildings: buildingsReducer,
  costs: costsReducer,
  paymentOrders: paymentOrdersReducer,
  snowClearingSchedules: snowClearingSchedulesReducer,
  userNotifications: userNotificationsReducer,
  users: usersReducer
});

export default rootReducer;
