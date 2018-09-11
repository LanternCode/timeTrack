import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timetrack from './Timetrack';

class App extends Component {

constructor(props){
  super(props);

  this.state = {

  };
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Timetrack App created by Adam Machowczyk</h1>
        </header>
        <Timetrack />
      </div>
    );
  }
}

export default App;
