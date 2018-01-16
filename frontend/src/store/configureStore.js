import asyncAwait from 'redux-async-await';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function createInitStore() {
  const middlewares = process.env.NODE_ENV === 'development' ?
    [
      applyMiddleware(asyncAwait),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ]
    :
    [
      applyMiddleware(asyncAwait),
    ];

  return createStore(
    rootReducer,
    compose(...middlewares),
  );
}
