// import '@testing-library/jest-dom/extend-expect';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainText: string;
    secondaryText: string;
    mainAccent: string;
    extraAccent: string;
    border: string;
    defaultBackground: string;
    disabledButton: string;
  }
}
