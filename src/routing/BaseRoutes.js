/*
  BaseRoutes.js

  This component is unimportant when rendering on the server.
  However, once the client has the bundle, the server is no longer needed
  and we can use traditional `<Switch>` and `<Route>` components
*/

import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../containers/Home';
import Details from '../containers/Details';
import Search from '../containers/Search';

function BaseRoutes({ location }) {
  // Since this is contained within `<Base>`, there is no need for
  // an "`<IndexRoute>`-like" component in previous versions of react-router
  return (
    <Switch>
      <Route exact path="/" component={Home} location={location} />
      <Route path="/make/model/:id" component={Details} location={location} />
      <Route path="/search" component={Search} location={location} />
    </Switch>
  );
}

export default withRouter(connect()(BaseRoutes));
