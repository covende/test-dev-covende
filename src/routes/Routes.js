import React, {Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import withLayout from '@components/Layout';
import {allFlattenRoutes as routes} from './index';

// Helpers
import NotFound from '@pages/publics/Error404';
import {getLoggedInUser} from '@helpers/authUtils';

const currentUser = getLoggedInUser();
const Routes = () => (
  // Renderiza el router con la diseño de rutas
  <Router>
    <Suspense fallback={<div>Cargando desde Routes.js..</div>}>
      <Switch>
        {routes.map((route, index) => {
          return (
            !route.children &&
            (route.roles === undefined ||
              currentUser === null ||
              Object.values(route.roles).indexOf(currentUser.role) !== -1) && (
              <route.route
                key={index}
                path={route.path}
                roles={route.roles}
                exact={route.exact}
                component={withLayout((props) => {
                  return <route.component {...props} />;
                })}></route.route>
            )
          );
        })}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
