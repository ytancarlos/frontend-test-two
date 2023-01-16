import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

body {
  background-color: #131413;
  color: snow;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}

ul {
  padding: 0;
  margin: 0
}

`;

export default GlobalStyle;
