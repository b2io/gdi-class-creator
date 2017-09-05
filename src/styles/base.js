import { injectGlobal } from 'styled-components';
import theme from './theme';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
  }

  body {
    color: ${theme.color.black};
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize.base};
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.85;
    margin: 0;
    padding: 0;
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre {
    margin: 0;
    padding: 0;
  }

  pre {
    font-family: ${theme.monoFontFamily};
  }

  a {
    color: ${theme.color.blue};
    text-decoration: underline;

    &:hover {
      color: ${theme.color.purple};
    }
  }

  .drop-target {
    align-items: stretch;
    display: flex;
    flex-direction: column;
  }
`;
