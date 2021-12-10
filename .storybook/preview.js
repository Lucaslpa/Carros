import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/style/global';
import { Theme } from '../src/style/theme';
import { HashRouter as Router } from 'react-router-dom';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </Router>
  ),
];
