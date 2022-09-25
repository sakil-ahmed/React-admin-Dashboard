import { createGlobalStyle } from "styled-components";
import { THEME } from "./../common/Themes";

export const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
  font-family: 'Poppins', sans-serif;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Poppins', sans-serif;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

a{
  text-decoration: none;
  color: ${THEME.color.btnBg};
}
#root, #__next {
  isolation: isolate;
}

/* Custom Styles */
.container{
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
.transition{
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
`;
