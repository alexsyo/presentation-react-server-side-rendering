import { createStore } from 'redux';
import reducers from './reducers'
import middlewares from './middlewares';

const initialState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducers, initialState, middlewares);

export default store;