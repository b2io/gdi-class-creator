import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from 'modules/AppHeader';
import { CreateClassForm } from 'modules/CreateClassForm';
import { Preview } from 'modules/Preview';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 600px) 1fr;
  grid-template-rows: 25% auto;
  grid-template-areas: 'header header header' '. content .';
`;

const Content = styled.div`
  grid-area: content;
  padding: 0 1em;
`;

function App({ onSubmit, options }) {
  return (
    <Wrapper>
      <AppHeader />
      <Content>
        <CreateClassForm {...options} onSubmit={onSubmit} />
        <Preview />
      </Content>
    </Wrapper>
  );
}

App.propTypes = {
  onSubmit: PropTypes.func.isRequired,

  options: PropTypes.object,
};

export default App;
