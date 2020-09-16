import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from 'styled-components';
// import { StylesProvider } from '@material-ui/core/styles';

import GlobalStyles from './GlobalStyles';
import theme from './theme';

import App from "./App";

const rootElement = document.getElementById("root");

render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {/* <StylesProvider injectFirst> */}
      <App />
    {/* </StylesProvider> */}
  </ThemeProvider>,
rootElement);
