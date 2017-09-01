import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const Wrapper = styled.header`
  align-items: center;
  background: ${theme.color.dark_gray};
  background-image: url(${theme.background.swirl});
  background-size: 4em;
  display: flex;
  padding: 1em;
  margin: 0 0 2em;

  h1 {
    color: ${theme.color.white};
    font-family: ${theme.cursiveFontFamily};
    font-size: ${theme.fontSize.title};
    margin: 0 0 0 0.5em;
    padding: 0;
  }

  img {
    height: 8em;
    width: 8em;
  }
`;

function AppHeader() {
  return (
    <Wrapper>
      <img src="./img/circle-gdi-logo.svg" alt="Girl Develop It - Don't be shy, develop it!" />
      <h1>Class Creator</h1>
    </Wrapper>
  );
}

export default AppHeader;
