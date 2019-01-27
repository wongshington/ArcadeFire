import React, { Component } from 'react';
import './App.css';

import Board from './memory/board';

class App extends Component {
  render() {
    return (
      <div className="App grid">
        <Board />
      </div>
    );
  }
}

export default App;
