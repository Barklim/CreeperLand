import theme from 'styles/theme';

type ThemeInterface = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line
  interface DefaultTheme extends ThemeInterface {}
}
