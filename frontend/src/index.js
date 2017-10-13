import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/configureStore';
import App from 'ui/components/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <NavigationBar />
        </div>
        <Route path='/' component={App} />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root'),
);
