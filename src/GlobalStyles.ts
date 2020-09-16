import { createGlobalStyle, css } from 'styled-components';

import RobotoRegular from './fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from './fonts/Roboto/Roboto-Bold.ttf';

export const bodyStyles = css`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin: 0;
`;

export const boldFontStyles = css`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

export const fontH1Styles = css`
  ${boldFontStyles};
  font-size: 26px;
`;

export const fontH2Styles = css`
  ${boldFontStyles};
  font-size: 18px;
`;

export const fontBody1Styles = css`
  ${boldFontStyles};
  font-size: 14px;
`;

export const fontBody2Styles = css`
  font-size: 14px;
`;

export const fontButtonStyles = css`
  ${boldFontStyles};
  font-size: 12px;
  text-transform: uppercase;
`;

export const resetButtonStylesCSS = css`
  background: none;
  padding: 0;
  border: none;
  outline: none;
`;

const GlobalStyle = createGlobalStyle`
  :root {
    ${({ theme }) => css`
      --mainText: ${theme.mainText};
      --secondaryText: ${theme.secondaryText};
      --mainAccent: ${theme.mainAccent};
      --extraAccent: ${theme.extraAccent};
      --border: ${theme.border};
      --defaultBackground: ${theme.defaultBackground};
      --disabledButton: ${theme.disabledButton};

      --initialZIndex: 1;
      --popperZIndex: 5;
      --modalZIndex: 10;
    `}
  }

  @font-face {
      font-family: 'Roboto';
      font-style: normal;
      src: local('Roboto'),
      url(${RobotoRegular}) format('ttf');
    }
  @font-face {
      font-family: 'LatoBold';
      font-style: normal;
      font-weight: bold;
      src: local('LatoBold'),
      url(${RobotoBold}) format('ttf');
    }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    ${bodyStyles}
  }

  .font-h1 {
    ${fontH1Styles}
  }

  .font-h2 {
    ${fontH2Styles}
  }

  .font-body1 {
    ${fontBody1Styles}
  }

  .font-body2 {
    ${fontBody2Styles}
  }

  .font-button {
    ${fontButtonStyles}
  }
  
  .bold-font {
    ${boldFontStyles}
  }
`;

export default GlobalStyle;
