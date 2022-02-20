import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages';
import UsersTable from './pages'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact component={MainPage} />
        {/* <Route path = "/users" exact component={UsersPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}