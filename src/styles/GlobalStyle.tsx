import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body{
margin: 0;
padding: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: whitesmoke;
}

*,*:before,*:after{
    box-sizing: border-box;
}

`;
