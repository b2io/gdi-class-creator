import { css } from 'styled-components';
import { px2em } from './functions';
import theme from './theme';

export const typographyTitle = (
  fontSize = theme.fontSize.title,
  context = theme.fontSize.base,
  fontFamily = theme.fontFamily,
) => css`
  font-family: ${fontFamily};
  font-size: ${px2em(fontSize, context)};
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1;
`;

export const typographySubhead = (
  fontSize = theme.fontSize.subhead,
  context = theme.fontSize.base,
  fontFamily = theme.fontFamily,
) => css`
  font-family: ${fontFamily};
  font-size: ${px2em(fontSize, context)};
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.6;
`;

// Button mixins

export const baseButton = () => css`
  border: 0;
  cursor: pointer;
  font-family: ${theme.fontFamily};
  font-size: 1em;
  cursor: pointer;
  padding: ${px2em(9)} ${px2em(12)};
  &:disabled {
    background: ${theme.color.grey};
    color: ${theme.color.greyLight};
    cursor: not-allowed;
    &:hover {
      background: ${theme.color.grey};
    }
  }
`;

export const defaultButton = () => css`
  background: ${theme.color.buttonBackground};
  color: ${theme.color.white};
  &:hover {
    background: ${theme.color.buttonBackgroundHover};
  }
`;

export const secondaryButton = () => css`
  background: ${theme.color.buttonBackgroundSecondary};
  color: ${theme.color.white};
  &:hover {
    background: ${theme.color.buttonBackgroundSecondaryHover};
  }
`;

// export const invertedButton = () => css`
//   background: ${theme.color.lightBackground};
//   color: ${theme.color.buttonBackground};
//   &:hover {
//     color: ${theme.color.buttonBackgroundHover};
//   }
// `;

// export const linkButton = () => css`
//   background: none;
//   color: ${theme.color.primaryDark};
//   padding: 0;
//   text-decoration: underline;
// `;

// export const zindex = {
//   modal: 9000,
//   overlay: 8000,
//   dropdown: 7000,
//   header: 6000,
//   footer: 5000,
//   base: 0,
// };
