import React, { Component } from 'react';
import './App.css';

import Tetris from './tetris/tetris';

class App extends Component {
  render() {
    return (
      <div className="App grid">
        <Tetris />
      </div>
    );
  }
}

export default App;
