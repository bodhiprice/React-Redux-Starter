import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Routes from './routes';
import reducers from './reducers';
import renderer from './utils/renderer';
import favicon from 'serve-favicon';
import path from 'path';

const store = createStore(reducers, {}, applyMiddleware(thunk));

const app = express();
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('public'));

app.get('*', (req, res) => {
  // Temporary hack to deal with favicon requests from browser
  if (req.path === '/favicon.ico') {
    return;
  }
  const dataCalls = matchRoutes(Routes, req.path).map(({ route }) => (route.loadData ? route.loadData(store) : null));

  Promise.all(dataCalls)
    .then(() => {
      res.send(renderer(req.path, store));
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000.');
})
