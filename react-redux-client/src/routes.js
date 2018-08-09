import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App';
import Todos from './containers/Todos';
import Todo from './containers/Todo';

export default (
  <BrowserRouter path="/" component={App}>
     <Route exact component={Todos} />
     <Route path="/:id" component={Todo} />
  </BrowserRouter>
)