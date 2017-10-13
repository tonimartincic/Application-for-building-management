import asyncAwait from 'redux-async-await';
import { applyMiddleware, compose, createStore } from 'redux';

export default function createInitStore() {
  const middlewares =
    [
      applyMiddleware(asyncAwait),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ];

  return createStore(
    rootReducer,
    compose(...middlewares),
  );
}
