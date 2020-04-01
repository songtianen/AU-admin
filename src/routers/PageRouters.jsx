import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';
import Login from '../views/pages/Login';
import Register from '../views/pages/Login/register';
// import Page404 from '../views/common/Page404';
import Layout from '../views/layout';

const Routers = () => (
  <Router>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      {/* <Route exact path='/' render={() => <Redirect to='/system' push />} /> */}
      {/* <Route exact component={Page404} /> */}
      <Route path='/' component={Layout} />
    </Switch>
  </Router>
);

export default Routers;
