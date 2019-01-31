import React from 'react';
import './tetris.css'

class Board extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.board;
  }
  buildGrid(){
    let grid = this.state.map( (el, i) => {
      return el.map( (el, i) => <div className={`${el} tet-tile`}></div> )
    })
    return grid;
  }

  render(){

    return (
    <div className="tetris-grid grid">
      {this.buildGrid()}
    </div>
    )
  }
  
}


 export default Board;