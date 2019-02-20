import React from 'react';
import Preview from './piecePreview';

class Scoreboard extends React.Component{
  constructor(props){
    super(props);
    this.startGame = this.startGame.bind(this);

  }

  startGame() {
    this.props.newGame();
  }
 
  render(){
    const piece = this.props.nextPiece;
    return (
      <div className= "grid scoreboard">
        This is the scoreboard
        <Preview piece={piece}/>
        <div className="start-button grid" onClick={this.startGame}> Start Game</div>

      </div>
    )
  }
}

export default Scoreboard;

 