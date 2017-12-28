import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from '../routes';

export default (path, store) => {
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${renderToString(<Provider store={store}>
            <StaticRouter location={path} context={{}}>
              <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
          </Provider>)}</div>
      </body>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
    </html>
  `;
};
