import React from 'react';
import { renderRoutes } from 'react-router-config';
import { injectGlobal } from 'emotion';

const App = ({ route }) => (
  <div className="yipee">
    {renderRoutes(route.routes)}
  </div>
);

// This injects styles into the head. Other styles are applied on client.
injectGlobal`
  html, body {
    padding: 10px;
  }
  body {
    font-family: sans-serif;
    font-size: 18px;
  }
`;

export default  {
  component: App
};
