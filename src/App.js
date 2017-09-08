import React, { Component } from 'react';
import AppHeader from 'modules/AppHeader';
import { CreateClassForm } from 'modules/CreateClassForm';
import { Preview } from 'modules/Preview';
import SpikeSheet from './components/SpikeSheet';
import './App.css';
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

class App extends Component {
  render() {
    return (
      <Wrapper>
        <AppHeader />
        <Content>
          <CreateClassForm />
          <Preview />
          <SpikeSheet />
        </Content>
      </Wrapper>
    );
  }
}

export default App;
