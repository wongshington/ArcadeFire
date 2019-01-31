import React from 'react';
import './tetris.css'

import { placePiece } from './boardFunctions';

class Board extends React.Component{

  constructor(props){
    super(props);
    this.state = {board: this.props.board,
                  listener: null,
                  piece: this.props.piece};
    this.handleKey = this.handleKey.bind(this);
    this.buildGrid = this.buildGrid.bind(this);
  }

  componentDidMount() {
    let newBoard = placePiece(this.state.board, this.state.piece);
    let listenerReference = document.addEventListener("keydown", this.handleKey)
    this.setState({ listener: listenerReference, board: newBoard })
    window.setTimeout(() => console.log("time"), 3000)
  }



  componentWillUnmount() {
    document.removeEventListener(this.state.listener);
  }

  buildGrid(){
    let grid = this.state.board.map( (el, i) => {
      return el.map( (el, i) => <div className={`${el} tet-tile`}>{el}</div> )
    })
    return grid;
  }

  handleKey(e) { // will go in the component
    let board = this.state.board;
    let piece = this.state.piece;
    let newBoard = board;
    switch (e.keyCode) {
      case 37: //left
        console.log("left");
        newBoard = this.props.pieceMover(board, piece, [0, -1])
        // make action to change position to the left
        break;
      case 39: // right
        console.log("right");
        newBoard = this.props.pieceMover(board, piece, [0, 1])
        // make action to change position to the right
        break;
      case 38: // up
        console.log("up");
        // make action to rotate piece
        break;
      case 40: // down
        console.log("down");
        newBoard = this.props.pieceMover(board, piece, [1, 0])
        // make action to change position down
        break;
      case 32:
        console.log("space")
        break;
      case 67:
        console.log("c")
        break;
      case 16:
        console.log("shift")
        break;
      default:
        break;
    }
    this.setState({board: newBoard})
  }

  render(){
    // console.groupCollapsed(this.props)
    // debugger
    return (
    <div className="tetris-grid grid">
      {this.buildGrid()}
    </div>
    )
  }
  
}


 export default Board;