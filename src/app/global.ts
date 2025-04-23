import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  :root {
  --background: #ffffff;
  --foreground: #171717;
  --black: #000000;
  --dark-color: #1D1E25;
  --gray-color: #7E8492;
  --gray-line-color: #EDEDED;
  --light-color: #CED1D8;
  --shadow: #5960871F;
  --font: 'Inter';
  --copyright: #AFB3BB;
  }

  a:-webkit-any-link {
    cursor: pointer;
    text-decoration: none;
  }

`
