import React from 'react';
import { render } from 'react-dom';
import { createHistory } from 'history';
import { Router, Route, useRouterHistory } from 'react-router';
import HomePage from './components/home/index.js';
import ConfigPage from './components/config/index.js';
import NotFoundPage from './components/notfound/index.js';

const browserHistory = useRouterHistory(createHistory)({
  basename: '/wonderwall'
});

render(
  <Router history={browserHistory}>
    <Route path='/' component={HomePage} />
    <Route path='/config' component={ConfigPage} />
    <Route path='*' component={NotFoundPage} />
  </Router>,
  document.getElementById('app')
);
