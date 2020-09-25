import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import {ThemeProvider} from 'emotion-theming';

import Route from './routes/Routes';

// Fake backend
import {configureFakeBackend} from './helpers/fake-backend';

configureFakeBackend();

// Template de estilos del sistema
import {theme as covendeTheme} from './theme';

export default function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={covendeTheme}>
        <Route />
      </ThemeProvider>
    </StylesProvider>
  );
}
