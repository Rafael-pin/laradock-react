import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import usersPage from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact component={usersPage} />
      </Switch>
    </BrowserRouter>
  );
}