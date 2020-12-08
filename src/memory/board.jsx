import React from 'react';
import './board.css';

import Row from "./row.jsx"
import tiles from "./tiles"

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = { boardHeight: 4, boardWidth: 4 };
    // this.state = {numTiles: 16}
  }

  buildBoard(){
    let board = [];
    for (let i = 0; i < this.state.boardHeight; i++) {
        
      board.push(<Row width={this.state.boardWidth}/>)
    }
      return ( 
        board
      )
      
  }

  render(){
    // let row;
    // let board = this.state.board.map( (el, i) => {

    // })
    return (
			<div className="main-view">
				<div className="board grid">{this.buildBoard()}</div>
			</div>
		);
  }
}

export default Board;