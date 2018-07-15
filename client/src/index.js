import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';


// #region 1 - Basic
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
// #endregion

// #region 2 - Redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// #endregion
