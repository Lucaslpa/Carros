import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  * {   
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif; 
      padding: 0;
      margin: 0; 
  }
  html {
      font-size: 62.5%;  
  }
  a {
      text-decoration: none; 
  } 
  h1,h2,h3,h4,h5,h6 {
      margin: 0;
      padding: 0;
  }

  em {
    font-weight: bold;
  }
`;
