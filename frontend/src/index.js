import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './ui/components/App';
import AnnouncementBoard from './ui/components/AnnouncementBoard';
import SecondComponent from 'ui/components/SecondComponent';
import Login from './ui/components/Login';
import configureStore from './store/configureStore';
import FirstComponent from './ui/components/FirstComponent';
import PrivateRoute from './ui/components/PrivateRoute';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
          <PrivateRoute exact path ='/'><App/></PrivateRoute>
          <PrivateRoute exact path='/board'><AnnouncementBoard/></PrivateRoute>
          <PrivateRoute exact path='/first-page'><FirstComponent/></PrivateRoute>
          <PrivateRoute exact path='/second-page'><SecondComponent/></PrivateRoute>
          <Route exact path='/login' component={Login} />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root'),
);
