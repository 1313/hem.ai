import React from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from 'emotion-theming';
import { App } from './App';
import { theme } from './theme';

const root = document.getElementById('root');

function renderApp(): void {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    root,
  );
}

renderApp();

if (module.hot) {
  module.hot.accept();
}
