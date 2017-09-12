import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import AppTitle from './AppTitle';
import Logo from './Logo';

const Wrapper = styled.div`
  background: ${theme.color.dark_grey};
  background-image: url(${theme.background.swirl});
  background-size: 4em;
  display: grid;
  grid-template-columns: 1fr minmax(300px, 600px) 1fr;
  grid-template-areas: '. header-content .';
  grid-area: header;
  margin: 0 0 2em;
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  grid-area: header-content;
  padding: 1em;
`;

function AppHeader() {
  return (
    <Wrapper>
      <Header>
        <Logo
          src="./img/circle-gdi-logo.svg"
          alt="Girl Develop It - Don't be shy, develop it!"
          title="Girl Develop It - Don't be shy, develop it!"
        />
        <AppTitle>Class Creator</AppTitle>
      </Header>
    </Wrapper>
  );
}

export default AppHeader;
