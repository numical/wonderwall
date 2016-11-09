import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import HomePage from './components/home/index.js';
import ConfigPage from './components/config/index.js';

render(
  <Router history={hashHistory}>
    <Route path='/' component={HomePage} />
    <Route path='/config' component={ConfigPage} />
  </Router>,
  document.getElementById('app')
);
