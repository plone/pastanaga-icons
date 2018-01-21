import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Icon from './Icon';
import Add from '../icons/add.svg';
import Plone from '../icons/plone.svg';
import Guillotina from '../icons/guillotina.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* Place your icons using the Icon component */}
        <Icon glyph={Add} />
        <Icon glyph={Add} size="45px" />
        <Icon glyph={Add} size="45px" color="red" />
        <Icon glyph={Plone} size="60px" color="#1782BE" />
        <Icon glyph={Guillotina} size="60px" color="#EC5528" />
      </div>
    );
  }
}

export default App;
