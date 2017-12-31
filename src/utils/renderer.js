import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { extractCritical } from 'emotion-server';
import { Helmet as Meta } from 'react-helmet';
import Routes from '../routes';

export default (path, store) => {
  const { html, ids, css } = extractCritical(() =>
    renderToString(
      <Provider store={store}>
        <StaticRouter location={path} context={{}}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>
    )
  );
  const meta = Meta.renderStatic();
  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
         ${meta.title.toString()}
        <style type="text/css">${css}</style>
      </head>
      <body>
        <div id="root">${html()}</div>
      </body>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script>
        window._emotion = ${serialize(ids)}
      </script>
      <script src="/bundle.js"></script>
    </html>
  `;
};
