import React, { Component } from 'react';
import CreateClassForm from 'modules/CreateClassForm';
import CreateAppHeader from 'modules/CreateAppHeader';
import SpikeSheet from './components/SpikeSheet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<CreateAppHeader />
        <CreateClassForm />
        <SpikeSheet />
      </div>
    );
  }
}

export default App;
