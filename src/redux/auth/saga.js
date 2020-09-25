import {Cookies} from 'react-cookie';
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import '@babel/polyfill'; // Saga requiere de esto

import {fetchJSON} from '@helpers/api';

import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  FORGET_PASSWORD,
} from './constants';

import {
  loginUserSuccess,
  loginUserFailed,
  registerUserSuccess,
  registerUserFailed,
  forgetPasswordSuccess,
  forgetPasswordFailed,
} from './actions';

/**
 * Establece la sesión
 * @param {*} user
 */
const setSession = (user) => {
  let cookies = new Cookies();
  if (user) cookies.set('user', JSON.stringify(user), {path: '/'});
  else cookies.remove('user', {path: '/'});
};
/**
 * Iniciar sesión del usuario
 * @param {*} payload - username and password
 */
function* login({payload: {username, password}}) {
  const options = {
    body: JSON.stringify({username, password}),
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  };

  try {
    const response = yield call(fetchJSON, '/users/authenticate', options);
    setSession(response);
    yield put(loginUserSuccess(response));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Credenciales inválidas';
        break;
      default:
        message = error;
    }
    yield put(loginUserFailed(message));
    setSession(null);
  }
}

/**
 * Cerrar la sesión del usuario
 * @param {*} param0
 */
function* logout({payload: {history}}) {
  try {
    setSession(null);
    yield call(() => {
      history.push('/account/login');
    });
  } catch (error) {}
}

/**
 * Registrar al usuario
 */
function* register({payload: {fullname, email, password}}) {
  const options = {
    body: JSON.stringify({fullname, email, password}),
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  };

  try {
    const response = yield call(fetchJSON, '/users/register', options);
    yield put(registerUserSuccess(response));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Credenciales inválidas';
        break;
      default:
        message = error;
    }
    yield put(registerUserFailed(message));
  }
}

/**
 * Contraseña olvidada (Recuperar contraseña)
 */
function* forgetPassword({payload: {username}}) {
  const options = {
    body: JSON.stringify({username}),
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  };

  try {
    const response = yield call(fetchJSON, '/users/password-reset', options);
    yield put(forgetPasswordSuccess(response.message));
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Credenciales inválidas';
        break;
      default:
        message = error;
    }
    yield put(forgetPasswordFailed(message));
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, login);
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER, register);
}

export function* watchForgetPassword() {
  yield takeEvery(FORGET_PASSWORD, forgetPassword);
}

function* authSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchForgetPassword),
  ]);
}

export default authSaga;
