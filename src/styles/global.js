import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0 none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #9f9495;
    background: #f4f4f4;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
