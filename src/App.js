import React, { Component } from 'react';
import CreateClassForm from 'modules/CreateClassForm';
import SpikeSheet from './components/SpikeSheet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateClassForm />
        <SpikeSheet />
      </div>
    );
  }
}

export default App;
