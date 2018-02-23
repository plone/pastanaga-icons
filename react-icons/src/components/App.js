import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Icon from './Icon';
import Add from '../icons/add.svg';
import Plone from '../icons/plone.svg';
import Guillotina from '../icons/guillotina.svg';

import Catalog from './Catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Icons Catalog</span>
        </header>
        <div className="demo">
          <h2>Demo:</h2>
          {/* Place your icons using the Icon component */}
          <div style={{ height: '100px' }}>
            <Icon name={Add} />
          </div>
          <Icon name={Add} size="45px" />
          <Icon name={Add} size="45px" color="red" />
          <Icon name={Plone} size="60px" color="#1782BE" />
          <Icon name={Guillotina} size="60px" color="#EC5528" />
        </div>
        <h2>Catalog</h2>
        <div className="catalog">
          <Catalog />
        </div>
      </div>
    );
  }
}

export default App;
