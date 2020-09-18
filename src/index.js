import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';
import theme from './theme';

import { App } from './view/scenes/App';

const rootElement = document.getElementById("root");

render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
      <App />
  </ThemeProvider>,
rootElement);
