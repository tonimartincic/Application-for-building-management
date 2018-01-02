import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router-dom';
import App from './ui/components/App';
import AnnouncementBoard from './ui/components/announcementBoard/AnnouncementBoard';
import Login from './ui/components/Login';
import configureStore from './store/configureStore';
import PlanningFutureCosts from './ui/components/planningFutureCosts/PlanningFutureCosts';
import PrivateRoute from './ui/components/PrivateRoute';
import { history } from './ui/components/history';
import SnowClearingScheduleView from "./ui/components/snowClearingSchedule/SnowClearingScheduleView";
import AllUsersInfo from './ui/components/usersManipulation/AllUsersInfo';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
          <PrivateRoute exact path ='/'><App/></PrivateRoute>
          <PrivateRoute exact path='/board'><AnnouncementBoard/></PrivateRoute>
          <PrivateRoute exact path='/planning-future-costs'><PlanningFutureCosts/></PrivateRoute>
          <PrivateRoute exact path='/snow-clearing-schedule'><SnowClearingScheduleView/></PrivateRoute>
          <PrivateRoute exact path='/all-users'><AllUsersInfo /></PrivateRoute>
          <Route exact path='/login' component={Login} />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root'),
);
