import React from 'react';
import Preview from './piecePreview';

class Scoreboard extends React.Component{
  constructor(props){
    super(props);
    this.startGame = this.startGame.bind(this);

  }

  // buildGrid() {
  //   let grid = this.props.board.map((el, i) => {
  //     return el.map((el, i) => {
  //       const color = el == 0 ? "white" : pieces[el].color
  //       return (
  //         <div className={`${color} tet-tile`}></div>
  //       )
  //     })
  //   })
  //   return grid;
  // }
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