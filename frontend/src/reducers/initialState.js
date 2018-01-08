const initialState = {
  userData: {
    id: null,
    firstName: null,
    lastName: null,
    mail: null,
    privilege: null,
    reminder: false,
    password: null,
    invalidUserNameAndPassword: false,
  },

  userInfoClicked: false,

  generateSchedule: false,

  approveChangeRequestClicked: false,

  userSettingsClicked: false,

  users: [],

  apartments: [],

  buildings: [],

  buildingUsers: [],

  costs: [],

  paymentOrders: [],

  snowClearingSchedules: [],

  userNotifications: [],

  announcements: [],

  userApartment: [],
};

export default initialState;
