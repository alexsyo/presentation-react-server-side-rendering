import express from 'express';
import path from 'path';
import {
  basic as renderBasic,
  redux as renderRedux,
  preloadedState as renderPreloadedState
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
app.use('/static', express.static(path.join(__dirname, '../../client/dist')));
app.get('/*', (req, res) => {
  res.send(renderPreloadedState())
});
// #endregion




app.listen(3000);
