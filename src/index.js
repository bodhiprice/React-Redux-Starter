import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Routes from './routes';
import reducers from './reducers';
import renderer from './utils/renderer';

const store = createStore(reducers, {}, applyMiddleware(thunk));

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  const dataCalls = matchRoutes(Routes, req.path).map(({ route }) => (route.loadData ? route.loadData(store) : null));

  Promise.all(dataCalls)
    .then(() => {
      res.send(renderer(req.path, store));
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000.');
})
