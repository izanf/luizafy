import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "DM Sans", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }
  html, body, #root {
    height: 100%;
  }

  body {
    background: #090707;
    margin: 0;
  }
`

export default GlobalStyle