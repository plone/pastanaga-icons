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

        <div className="disclaimer">
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="nofollow">
            <img src="https://camo.githubusercontent.com/6dcc300ab83c479af6c1c1f004b6f9dad77e7736/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d434325323042592d2d5341253230342e302d6c69676874677265792e737667"
                 alt="License: CC BY-SA 4.0"
                 style={{ maxWidth:'100%' }} />
          </a>
          Pastanaga Icons are released under Creative Commons Attribution-ShareAlike License and belongs to <a href="https://twitter.com/albertcasado" target="_blank" rel="noopener noreferrer">Albert Casado</a> and the <a href="https://plone.org/foundation" target="_blank" rel="noopener noreferrer">Plone Foundation</a>.
        </div>
      </div>
    );
  }
}

export default App;
