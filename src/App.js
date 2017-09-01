import React, { Component } from 'react';
import { CreateClassForm } from 'modules/CreateClassForm';
import { Preview } from 'modules/Preview';
import SpikeSheet from './components/SpikeSheet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateClassForm />
        <Preview />
        <SpikeSheet />
      </div>
    );
  }
}

export default App;
