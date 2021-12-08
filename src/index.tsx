import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Theme } from './style/theme';
import { GlobalStyle } from './style/global';
import { RoleProvider } from 'contexts/role';
import { VehiclesProvider } from 'contexts/vehicles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RoleProvider>
        <VehiclesProvider>
          <App />
        </VehiclesProvider>
      </RoleProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
