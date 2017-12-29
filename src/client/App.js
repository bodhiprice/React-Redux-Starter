import React from 'react';
import { renderRoutes } from 'react-router-config';
import { css } from 'glamor';

css.global('html, body', { padding: 0 });
css.global('body', { fontFamily: 'sans-serif', fontSize: '18px' });

const App = ({ route }) => (
  <div className="yipee">
    {renderRoutes(route.routes)}
  </div>
);

export default  {
  component: App
};
