/*
  serverRoutes.js

  Used instead of <Route> in `react-router-config` on the server.
  Compatible with `react-router-redux`'s `<ConnectedRouter>`
*/

import Base from '../containers/Base';

import Home from '../containers/Home';
import Details from '../containers/Details';
import Search from '../containers/Search';

// Fairly straightforward object nesting, should mirror `<BaseRoute>`
// structure in /src/routing/BaseRoutes.js
const routes = [
  {
    component: Base,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/make/model/:id',
        component: Details,
      },
      {
        path: '/search',
        component: Search,
      },
    ],
  },
];

export default routes;
