import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../views/pages/Login';
import Page404 from '../views/common/Page404';
import Layout from '../views/layout';

const Routers = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
      <Route path="/app" component={Layout} />
      <Route exact path="/login" component={Login} />
      <Route component={Page404} />
    </Switch>
  </Router>
);

export default Routers;
