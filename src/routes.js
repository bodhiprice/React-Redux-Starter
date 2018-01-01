import React from 'react';
import App from './client/App';
import HomePage from './client/pages/HomePage/HomePage';
import PostPage from './client/pages/PostPage/PostPage';
import NotFoundPage from './client/pages/NotFoundPage/NotFoundPage';

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
