import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './ui/components/NavigationBar';
import App from './ui/components/App';
import FirstComponent from './ui/components/FirstComponent';
import SecondComponent from 'ui/components/SecondComponent';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <NavigationBar />
        </div>
        <Route exact path='/' component={App} />
        <Route path='/first-page' component={FirstComponent} />
        <Route path='/second-page' component={SecondComponent} />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root'),
);
