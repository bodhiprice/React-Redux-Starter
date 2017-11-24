import React from 'react';
import { Route } from 'react-router-dom';
import App from './client/components/App/App';

export default () => (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/about" component={() => 'About'} />
  </div>
);
