import React from 'react';
import HomePage, { loadData } from './client/pages/HomePage';
import PostPage from './client/pages/PostPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...PostPage,
    path: '/post/:id'
  }
];
