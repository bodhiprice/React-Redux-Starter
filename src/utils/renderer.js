import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { renderStatic } from 'glamor/server';
import Routes from '../routes';

export default (path, store) => {
  const { html, css, ids } = renderStatic(() =>
    renderToString(
      <Provider store={store}>
        <StaticRouter location={path} context={{}}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>
    )
  );
  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">${css}</style>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script>
        window._glam = ${serialize(ids)}
      </script>
      <script src="/bundle.js"></script>
    </html>
  `;
};
