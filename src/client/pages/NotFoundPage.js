import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => (
  <React.Fragment>
    <Helmet>
      <title>404 Page Not Found</title>
    </Helmet>
    <h1>Page not found</h1>
    <p>This is the 404 page...</p>
  </React.Fragment>
);

export default {
  component: NotFoundPage
};
