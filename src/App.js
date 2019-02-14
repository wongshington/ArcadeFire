import React, { Component } from 'react';
import './App.css';

// import BoardContainer from './memory/board_container';
import BoardContainer from './tetris/board_container';
import ScoreboardContainer from './tetris/scoreboard_container';
// import Board from './tetris/board';

class App extends Component {
  render() {
    return (
      <div className="App grid">
        {/* <BoardContainer /> */}
        <BoardContainer />
        <ScoreboardContainer />
      </div>
    );
  }
}

export default App;
