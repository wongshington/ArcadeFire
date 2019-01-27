import React from 'react';
import Tile from "./tile.jsx"

// class Row extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {width: this.props.width}
//     this
//   }
// }

const Row = (props) => {
  let result = [];
  for (let i = 0; i < props.width; i++) {
    result.push(<Tile text={"say this"} />)
    
  } 

  return (
    <div className="row flex">
     {result}
    </div>

  )
}

export default Row;