import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter, matchPath } from 'react-router-dom';

import basicTemplate from './templates/basic';
import reduxTemplate from './templates/redux';
import reduxCircularTemplate from './templates/redux-circular';

import reducers from '../../client/src/redux/reducers';
import middlewares from '../../client/src/redux/middlewares';
import routes from '../../client/src/components/App/RouterRedux/routes';
import { initializeProfile } from '../../client/src/redux/reducers/profile';
import App from '../../client/src/components/App';

// #region 1 - basic renering
export const basic = () => {
  const html = renderToString(<App />);

  return basicTemplate(html);
}
// #endregion

// #region 2 - rendering with redux
export const redux = () => {
  const store = createStore(reducers, {}, middlewares);
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const initialState = store.getState();

  return reduxTemplate(html, initialState);
}
// #endregion

// #region 3 - rendering with preloaded state
export const preloadedState = () => {
  const store = createStore(reducers, {}, middlewares);

  store.dispatch(initializeProfile());

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const initialState = store.getState();

  return reduxTemplate(html, initialState);
}
// #endregion

// #region 4 - rendering with circular json
export const circularJson = () => {
  const store = createStore(reducers, {}, middlewares);

  store.dispatch(initializeProfile());

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const initialState = store.getState();

  return reduxCircularTemplate(html, initialState);
}
// #endregion

// #region 5 - rendering with router
export const basicRouter = (req) => {
  const context = {};

  const html = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
  );

  return basicTemplate(html);
}
// #endregion

// #region 6 - rendering with router and redux
export const routerRedux = (req) => {
  const store = createStore(reducers, {}, middlewares);
  const context = {};

  routes(store).find((route) => {
    const match = matchPath(req.path, route);

    if(match && route.loadData) {
      route.loadData();
    }

    if(match) return route;
  });

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
  );

  const initialState = store.getState();

  return reduxCircularTemplate(html, initialState);
}
// #endregion

