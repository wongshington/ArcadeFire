import React from 'react';
import BoardContainer from './board_container';
import ScoreboardContainer from './scoreboard_container';


const Tetris = () => {

  return (
      <div className="grid tetris-view">
        <BoardContainer />
        <ScoreboardContainer />
      </div>
    )
}
export default Tetris;