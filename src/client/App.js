import React from 'react';
import { renderRoutes } from 'react-router-config';
import { injectGlobal } from 'emotion';

injectGlobal`
  html, body {
    padding: 10px;
  }
  body {
    font-family: sans-serif;
    font-size: 18px;
  }
`;

const App = ({ route }) => (
  <div className="yipee">
    {renderRoutes(route.routes)}
  </div>
);

export default  {
  component: App
};
