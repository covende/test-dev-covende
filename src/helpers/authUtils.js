import {Cookies} from 'react-cookie';

/**
 * Comprueba si la usuario está autenticada
 */
const isUserAuthenticated = () => {
  const user = getLoggedInUser();
  // if (!user || user === null || !user.user) {
  if (!user) {
    return false;
  }
  return true;
  // const decoded = jwtDecode(user.token);
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp > currentTime) {
  //     console.warn('access token expired');
  //     return false;
  // } else {
  //     return true;
  // }
};

/**
 * Retorna el usuario en sesión
 */
const getLoggedInUser = () => {
  const cookies = new Cookies();
  const user = cookies.get('user');
  return user ? (typeof user == 'object' ? user.user : JSON.parse(user)) : null;
};

export {isUserAuthenticated, getLoggedInUser};
