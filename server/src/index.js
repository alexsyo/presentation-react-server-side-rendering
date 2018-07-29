import express from 'express';
import path from 'path';
import {
  basic as renderBasic,
  redux as renderRedux,
  preloadedState as renderPreloadedState,
  circularJson as renderCircularJson,
  basicRouter as renderBasicRouter,
  routerRedux as renderRouterRedux
} from './render';

const app = express();

// #region 1 - client side rendering
// app.use('/static', express.static(path.join(__dirname, '../../client/dist')));
// app.get('/*', express.static(path.join(__dirname, '../../client/dist')));
// #endregion

// #region 2 - basic server side rendering
// app.use('/static', express.static(path.join(__dirname, '../../client/dist')));
// app.get('/*', (req, res) => {
//   res.send(renderRedux())
// });
// #endregion

// #region 3 - server side rendering with preloaded state
// app.use('/static', express.static(path.join(__dirname, '../../client/dist')));
// app.get('/*', (req, res) => {
//   res.send(renderPreloadedState())
// });
// #endregion

// #region 4 - server side rendering with circular json
// app.use('/static', express.static(path.join(__dirname, '../../client/dist')));
// app.get('/*', (req, res) => {
//   res.send(renderCircularJson())
// });
// #endregion

// #region 5 - server side rendering with router
// app.use('/static', express.static(path.join(__dirname, '../../client/dist')));
// app.get('/*', (req, res) => {
//   res.send(renderBasicRouter(req))
// });
// #endregion

// #region 6 - server side rendering with router and redux
app.use('/static', express.static(path.join(__dirname, '../../client/dist')));
app.get('/*', (req, res) => {
  res.send(renderRouterRedux(req))
});
// #endregion


app.listen(3000);
