import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App/App';

export default (content) => (`
  <html>
    <head></head>
    <body>
      <div id="root">${renderToString(<App />)}</div>
    </body>
    <script src="bundle.js"></script>
  </html>
`);
