import { rgba, darken, tint, lighten } from 'polished';

const palette = {
  gdi_pink: '#f05b62',
  dark_blue: '#2a4758',
  earth_yellow: '#d8ae64',
  mauve: '#a05258',
  white: '#ffffff',
  grey: '#aaa',
  dark_gray: '#333333',
};

const theme = {
  fontFamily: 'Montserrat, Helvetica, Arial, sans-serif',
  monoFontFamily: 'Cutive Mono, monospace',
  cursiveFontFamily: 'Pacifico, cursive',
  fontSize: {
    title: '40px',
    subhead: '18px',
    base: '14px',
    small: '13px',
    medium: '14px',
  },

  color: {
    ...palette,
    greyLight: lighten(0.25, palette.grey),
    buttonBackground: palette.gdi_pink,
    buttonBackgroundHover: palette.earth_yellow,
  },

  background: {
	swirl: '././img/swirl.png',
  },
};

export default theme;
