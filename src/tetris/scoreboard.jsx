import React from 'react';
import Preview from './piecePreview';

class Scoreboard extends React.Component {
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
        <Preview piece={piece} text={"Next Piece"}/>
        <div className="start-button grid" onClick={this.startGame}> Start Game</div>
        <h2>Score: {this.props.score}</h2>
        {this.props.message}
      </div>
    )
  }
}
 
export default Scoreboard;

 