import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Catalog from './Catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Icons Catalog</span>
        </header>
        <Catalog />
      </div>
    );
  }
}

export default App;
