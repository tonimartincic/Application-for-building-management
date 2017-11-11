import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './ui/components/App';
import AnnouncementBoard from './ui/components/AnnouncementBoard';
import SecondComponent from 'ui/components/SecondComponent';
import Login from './ui/components/Login';
import configureStore from './store/configureStore';
import FirstComponent from "./ui/components/FirstComponent";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route path ='/app' component={App}/>
        <Route exact path='/board' component={AnnouncementBoard} />
        <Route path='/first-page' component={FirstComponent} />
        <Route path='/second-page' component={SecondComponent} />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root'),
);
