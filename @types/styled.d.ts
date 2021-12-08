/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from '../src/style/theme';

type CustomTheme = typeof Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
