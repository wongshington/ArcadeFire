import React from 'react';
import styles from './tetris.css'

import {pieces} from './pieces';

class Board extends React.Component{

  constructor(props){
    super(props);
    this.state = {intervalId: null, level: 1}
    this.handleKey = this.handleKey.bind(this);
    this.buildGrid = this.buildGrid.bind(this);
    this._tick = this._tick.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
    this.startGame = this.startGame.bind(this);
  }
  
  startGame(){
    this.props.newGame();
    document.addEventListener("keydown", this.handleKey);
    const intervalId = window.setInterval(this._tick, 1000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey);
    window.clearInterval(this.state.intervalId);
  }
  
  changeLevel(){ //can pull this logic out into the redux store as well
    const newLevel = this.state.level + 1;
    window.clearInterval(this.state.intervalId);
    const intervalId = window.setInterval(this._tick, (1000/newLevel) );
    this.setState({intervalId: intervalId, level: newLevel})
  }

  buildGrid(){
    let grid = this.props.board.map( (el, i) => {
      return el.map( (el, i) => {
        const color = el == 0 ? "white": pieces[el].color
        return( 
        <div className={`${color} tet-tile`}></div> 
        )
      })
    })
    return grid;
  }

  _tick(){

    this.props.pieceMover(this.props.board, this.props.piece, [1,0])
  }

  resetInterval(){
    window.clearInterval(this.state.intervalId);
    let interval = window.setInterval(this._tick, 1000)
    this.setState({ intervalId: interval })
  }

  handleKey(e) { // will go in the component
    let board = this.props.board;
    let piece = this.props.piece; //should this be state or props?
    switch (e.keyCode) {
      case 37: //left
        console.log("left");
        this.props.pieceMover(board, piece, [0, -1])
        // make action to change position to the left
        break;
      case 39: // right
        console.log("right");
        this.props.pieceMover(board, piece, [0, 1])
        // make action to change position to the right
        break;
      case 38: // up
        console.log("up");
        this.props.rotate(board, piece);
        // make action to rotate piece
        break;
      case 40: // down
        console.log("down");
        this.resetInterval();
        this.props.pieceMover(board, piece, [1, 0])
        // make action to change position down
        break;
      case 32:
        console.log("space")
        this.resetInterval();
        this.props.hardDropper(board, piece);
        break;
      case 67:
        console.log("c")
        this.props.saver();
        break;
      case 16:
        console.log("shift")
        this.props.saver();
        break;
      default:
        break;
    }
    // this.setState({board: newBoard})
  }

  render(){

    return (
      <div>
        Reactris
        <div className="start-button grid" onClick={this.startGame}> Start Game</div>
        <div className="tetris-grid grid">
          {this.buildGrid()}
        </div>
      </div>
    )
  }
  
}


 export default Board;