import {all, call, fork, takeEvery, put} from 'redux-saga/effects';
import '@babel/polyfill'; // Saga requiere de esto

import {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_TYPE,
  TOGGLE_RIGHT_SIDEBAR,
  SHOW_RIGHT_SIDEBAR,
  HIDE_RIGHT_SIDEBAR,
} from './constants';
import * as layoutConstants from '@constants';
import {
  changeSidebarTheme as changeLeftSidebarThemeAction,
  changeSidebarType as changeSidebarTypeAction,
} from './actions';

/**
 * Cambia atributo del <body>
 */
function changeBodyAttribute(attribute, value) {
  if (document.body) document.body.setAttribute(attribute, value);
  return true;
}

/**
 * Alterna la clase en el <body>
 * @param {*} cssClass
 */
function manageBodyClass(cssClass, action = 'toggle') {
  switch (action) {
    case 'add':
      if (document.body) document.body.classList.add(cssClass);
      break;
    case 'remove':
      if (document.body) document.body.classList.remove(cssClass);
      break;
    default:
      if (document.body) document.body.classList.toggle(cssClass);
      break;
  }

  return true;
}

/**
 * ---------------------------------------------------------------------------------------------------------------------------
 * Nota: A continuación se muestran las funciones que le permiten guardar las preferencias del usuario en el backend haciendo una solicitud de API.
 * Por ahora, solo estamos aplicando la lógica requerida en el lado de la interfaz
 * ----------------------------------------------------------------------------------------------------------------------------
 */

/**
 * Cambia el tipo de layout
 * @param {*} param0
 */
function* changeLayout({payload: layout}) {
  try {
    yield call(changeBodyAttribute, 'data-layout', layout);
    if (layout === layoutConstants.LAYOUT_VERTICAL) {
      yield put(
        changeLeftSidebarThemeAction(
          layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT,
        ),
      );
      yield put(
        changeSidebarTypeAction(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED),
      );
    }

    if (layout === layoutConstants.LAYOUT_HORIZONTAL) {
      yield put(
        changeLeftSidebarThemeAction(
          layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT,
        ),
      );
      yield put(
        changeSidebarTypeAction(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED),
      );
    }
  } catch (error) {}
}

/**
 * Cambia el ancho del layout (Considerado por tematica responsive)
 * @param {*} param0
 */
function* changeLayoutWidth({payload: width}) {
  try {
    if (width === layoutConstants.LAYOUT_WIDTH_BOXED) {
      yield call(manageBodyClass, 'left-side-menu-condensed', 'add');
      yield call(manageBodyClass, 'boxed-layout', 'add');
    } else {
      yield call(manageBodyClass, 'left-side-menu-condensed', 'remove');
      yield call(manageBodyClass, 'boxed-layout', 'remove');
    }
  } catch (error) {}
}

/**
 * Cambia el tema de la barra lateral izquierda (Considerado por tematica responsive)
 * @param {*} param0
 */
function* changeLeftSidebarTheme({payload: theme}) {
  try {
    if (theme === layoutConstants.LEFT_SIDEBAR_THEME_DARK) {
      yield call(manageBodyClass, 'left-side-menu-dark', 'add');
    } else {
      yield call(manageBodyClass, 'left-side-menu-dark', 'remove');
    }
  } catch (error) {}
}

/**
 * Cambia el tipo de barra lateral izquierda
 * @param {*} param0
 */
function* changeLeftSidebarType({payload: type}) {
  try {
    switch (type) {
      case layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED:
        yield call(manageBodyClass, 'left-side-menu-condensed', 'add');
        break;
      case layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE:
        yield call(manageBodyClass, 'left-side-menu-condensed', 'remove');
        yield call(manageBodyClass, 'scrollable-layout', 'add');
        break;
      default:
        yield call(manageBodyClass, 'left-side-menu-condensed', 'remove');
        yield call(manageBodyClass, 'scrollable-layout', 'remove');
        break;
    }
  } catch (error) {}
}

/**
 * Alterna la barra lateral derecha (Posibilidad de chat escondido a futuro)
 */
function* toggleRightSidebar() {
  try {
    yield call(manageBodyClass, 'right-bar-enabled');
  } catch (error) {}
}

/**
 * Muestra la barra lateral derecha (Posibilidad de chat escondido a futuro)
 */
function* showRightSidebar() {
  try {
    yield call(manageBodyClass, 'right-bar-enabled', 'add');
  } catch (error) {}
}

/**
 * Oculta la barra lateral derecha (Posibilidad de chat escondido a futuro)
 */
function* hideRightSidebar() {
  try {
    yield call(manageBodyClass, 'right-bar-enabled', 'remove');
  } catch (error) {}
}

/**
 * Watchers (Observadores)
 */
export function* watchChangeLayoutType() {
  yield takeEvery(CHANGE_LAYOUT, changeLayout);
}

export function* watchChangeLayoutWidth() {
  yield takeEvery(CHANGE_LAYOUT_WIDTH, changeLayoutWidth);
}

export function* watchChangeLeftSidebarTheme() {
  yield takeEvery(CHANGE_SIDEBAR_THEME, changeLeftSidebarTheme);
}

export function* watchChangeLeftSidebarType() {
  yield takeEvery(CHANGE_SIDEBAR_TYPE, changeLeftSidebarType);
}

export function* watchToggleRightSidebar() {
  yield takeEvery(TOGGLE_RIGHT_SIDEBAR, toggleRightSidebar);
}

export function* watchShowRightSidebar() {
  yield takeEvery(SHOW_RIGHT_SIDEBAR, showRightSidebar);
}

export function* watchHideRightSidebar() {
  yield takeEvery(HIDE_RIGHT_SIDEBAR, hideRightSidebar);
}

function* LayoutSaga() {
  yield all([
    fork(watchChangeLayoutType),
    fork(watchChangeLayoutWidth),
    fork(watchChangeLeftSidebarTheme),
    fork(watchChangeLeftSidebarType),
    fork(watchToggleRightSidebar),
    fork(watchShowRightSidebar),
    fork(watchHideRightSidebar),
  ]);
}

export default LayoutSaga;
