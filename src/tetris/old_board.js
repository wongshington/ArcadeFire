import React from 'react';
import './tetris.css'

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {height: 20,
                  width: 10, 
                  listener: null,
                  board: null,
                  currentX: 4,
                  currentY: 4
                }
    this.handleKey = this.handleKey.bind(this);
    window.build = this.buildGrid.bind(this);
  }


  componentDidMount(){
    let listenerReference = document.addEventListener("keydown", this.handleKey)
    this.setState({listener: listenerReference})
    this.setState({board: this.buildGrid()})
  }
  componentWillUnmount(){
    document.removeEventListener(this.state.listener);

  }

  handleKey(e) {
    // to change the position of a tile
    let current = this.findCurrent();
    // debugger
    switch (e.keyCode) {
      case 37:
          
          this.setState({currentX: (this.state.currentX - 1) })
        break;
      case 39:
        this.setState({ currentX: (this.state.currentX + 1) })
        break;
      case 38:
        this.setState({ currentY: (this.state.currentY - 1) })
        break;
      case 40:
        this.setState({ currentY: (this.state.currentY + 1) })
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
    // debugger
    // this.props.keydown(); // not working yet
    // window.build = this.buildGrid
    // this.buildGrid();
    
  }
  findCurrent(){
    let current;
    this.state.board.forEach( (el, i) => {
      el.forEach( (el2, j) => {
        if (el2.props.current){
          current = el2;
        }
      })
    })
    return current;
  }

  buildGrid(){
    let result = []
    for (let i = 0; i < this.state.height; i++) {
      let row = [];
      for (let j = 0; j < this.state.width; j++) {
        let current = "";
        let color = "";
        if (i == this.state.currentY && j == this.state.currentX ) { //current
          current = "current";
          color = "red"
          console.log("true")
        }
        
        row.push(<div className={`tet-tile ${color} ${current}`}></div>)
        // row.push(<Tile x={j} y={i} color={color} current={current} />)
      }
      result.push(row);
    }
    return result;
    
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.currentX != this.state.currentX || prevState.currentY != this.state.currentY){
      this.setState({board: this.buildGrid()})
    }
  }
  render(){  
    return (
      <div>
        <div className="tetris-grid grid">
        {this.state.board}
        </div>
      </div>
    )
  }
}

export default Board;

class Tile extends React.Component{

  constructor(props){
    super(props);
    this.state = {x: this.props.x, 
                  y: this.props.y,
                  color: this.props.color,
                  current: this.props.current
                }
    this.something = this.something.bind(this);
  }

  handleKey(e){
    // to change the position of a tile

  }
  something(){
    console.log("something")
  }

  render(){
    let color = this.props.color;

    return (
      <div className={`tet-tile ` + color}>

      </div>
    )
  }
}