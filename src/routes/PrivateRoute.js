import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {getLoggedInUser} from '@helpers/authUtils';

export const PrivateRoute = ({component: Component, roles, ...rest}) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = getLoggedInUser();
      if (!currentUser) {
        // No ha iniciado sesión, redirija a la página de inicio de sesión con la URL de retorno
        return (
          <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        );
      }

      // Comprobar si la ruta está restringida por función
      if (roles && roles.indexOf(currentUser.role) === -1) {
        // Rol no autorizado, redirigir a la página de inicio
        return <Redirect to={{pathname: '/'}} />;
      }

      // Autorizado para devolver el componente
      return <Component {...props} />;
    }}
  />
);
