import { combineReducers } from 'redux';
import buildingReducer from './buildingReducer'

const rootReducer = combineReducers({
  building: buildingReducer,
});

export default rootReducer;
