import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/style/global';
import { Theme } from '../src/style/theme';

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
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
