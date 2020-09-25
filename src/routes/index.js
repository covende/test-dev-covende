import React from 'react';
import {Redirect} from 'react-router-dom';
import {Route} from 'react-router-dom';

// import {role as GlobalRole} from '@helpers/role';
import {Role as GlobalRole} from '../helpers/role';
import {PrivateRoute} from './PrivateRoute';

// Home
const Home = React.lazy(() => import('@pages/Publics/Home'));
const About = React.lazy(() => import('@pages/Publics/Home'));
// const NotFound = React.lazy(() => import('@pages/Publics/Error404'));

// Autorización
// const Login = React.lazy(() => import('../pages/auth/Login'));
// const Logout = React.lazy(() => import('../pages/auth/Logout'));
// const Register = React.lazy(() => import('../pages/auth/Register'));
// const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
// const Confirm = React.lazy(() => import('../pages/auth/Confirm'));

// Ruta raíz
// const rootRoute = {
//   path: '/*',
//   exact: true,
//   component: () => <Redirect to="/" />,
//   route: Route,
//   roles: GlobalRole,
// };

// Home
const homeRoutes = {
  path: '/',
  name: 'Home',
  component: Home,
  exact: true,
  route: Route,
  roles: GlobalRole,
};

// About
const aboutRoutes = {
  path: '/nosotros',
  name: 'About',
  component: About,
  route: Route,
  roles: GlobalRole,
};

// 404
// const notFoundRoutes = {
//   path: '/404',
//   name: 'NotFound',
//   component: NotFound,
//   route: Route,
//   roles: GlobalRole,
// };

// // Autorización
// const authRoutes = {
//   path: '/account',
//   name: 'Auth',
//   children: [
//     {
//       path: '/account/login',
//       name: 'Login',
//       component: Login,
//       route: Route,
//     },
//     {
//       path: '/account/logout',
//       name: 'Logout',
//       component: Logout,
//       route: Route,
//     },
//     {
//       path: '/account/register',
//       name: 'Register',
//       component: Register,
//       route: Route,
//     },
//     {
//       path: '/account/confirm',
//       name: 'Confirm',
//       component: Confirm,
//       route: Route,
//     },
//     {
//       path: '/account/forget-password',
//       name: 'Forget Password',
//       component: ForgetPassword,
//       route: Route,
//     },
//   ],
// };

// Rutas protegidas mediante autorización
// const authProtectedRoutes = [dashboardRoutes, ...appRoutes];
const authProtectedRoutes = [];

// Todas las rutas acopladas
const allRoutes = [
  // rootRoute,
  homeRoutes,
  aboutRoutes,
  // notFoundRoutes
  //   authRoutes
];

const flattenRoutes = (routes) => {
  let flatRoutes = [];

  routes = routes || [];
  routes.forEach((item) => {
    flatRoutes.push(item);

    if (typeof item.children !== 'undefined') {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

const allFlattenRoutes = flattenRoutes(allRoutes);
export {allRoutes, authProtectedRoutes, allFlattenRoutes};
