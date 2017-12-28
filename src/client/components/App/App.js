import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../Home/Home;

const App = () => (
  <div>
    <Link to='/about'>Boom</Link>
    <Posts />
  </div>
);

export default App;
