import React from 'react';
import App from './client/App';
import HomePage from './client/pages/HomePage';
import PostPage from './client/pages/PostPage';
import NotFoundPage from './client/pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...PostPage,
        path: '/post/:id'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
