const lightTheme = {
  primary: 'rgba(215,113,88,1)',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
};

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};








const ROOT_FS = 10;

// ---

const palette = {
  white: '#fff',
  white_2: '#f8f9fa',
  white_3: '#e7e8e9',

  black: '#2e2e2e',

  gray: '#454545',
  gray_2: '#797a7b',

  lightGray: '#b5b6b7',

  purple: '#d941ff',
  purple_2: '#d54ff6',

  red: '#F94040',

  blue: '#4053F9',

  lime: '#4ad73f',
  lime_2: '#5bf74f',
  lime_3: '#52f64f',

  green: '#355635',

  $latestBuysCardBg: 'rgba(57, 57, 57, 0.5)',
  $rouletteCardBg: ' rgba(255, 255, 255, 0.1)',
  $aboutShadow: 'rgba(0, 0, 0, 0.25)',
  $buyBackdrop: 'rgba(27, 27, 27, 0.5)',
};

export type PaletteColor = keyof typeof palette;

// ---

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  laptop: '992px',
  pc: '1250px',
  $navbar: '850px',
};

export type Breakpoint = keyof typeof breakpoints;

// ---

const fonts = {
  primary: "'Rubik', sans-serif",
};

export type Font = keyof typeof fonts;

// ---

const transtions = {
  primary: '0.5s',
};

export type Transition = keyof typeof transtions;

// ---

const opacities = {
  primary: '.7',
  secondary: '.5',
};

export type Opacity = keyof typeof opacities;

// ---

const zIndexes = {
  backdrop: 9,
  menu: 10,
  lines: 1,
  header: 2,
  card__content: 1,
};

export type ZIndex = keyof typeof zIndexes;

// ---

const theme = {
  ROOT_FS,
  palette,
  breakpoints,
  fonts,
  transtions,
  opacities,
  zIndexes,
};

export default theme;
