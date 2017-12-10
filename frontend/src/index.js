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
        <PrivateRoute path ='/'><App/></PrivateRoute>
        <PrivateRoute path='/board'><AnnouncementBoard/></PrivateRoute>
        <PrivateRoute path='/first-page'><FirstComponent/></PrivateRoute>
        <PrivateRoute path='/second-page'><SecondComponent/></PrivateRoute>
        <Route path='/login' component={Login} />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root'),
);
