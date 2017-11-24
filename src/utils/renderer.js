import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from '../routes';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default (path) => (`
  <html>
    <head></head>
    <body>
      <div id="root">${renderToString(
        <Provider store={store}>
          <StaticRouter location={path} context={{}}>
            <Routes />
          </StaticRouter>
        </Provider>
      )}</div>
    </body>
    <script src="bundle.js"></script>
  </html>
`);
