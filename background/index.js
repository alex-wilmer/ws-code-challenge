import { createStore, applyMiddleware } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import { createLogicMiddleware } from 'redux-logic';
import { handleActions } from 'redux-actions';
import logic from './logic';
import state from './state';
import actions from './actions';

const store = createStore(
  handleActions(actions, state),
  applyMiddleware(createLogicMiddleware([logic])),
);

wrapStore(store, { portName: process.env.REACT_APP_STORE_PORT });
