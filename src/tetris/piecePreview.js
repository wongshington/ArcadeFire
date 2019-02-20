import React from 'react';

const Preview = ({piece}) => {
  
  // need to build grid, then place piece on that grid
  let grid = [];

  for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      let color = "white"; // for now 
      row.push(<div className={`${color} tet-tile preview-tile`}></div>);
    }
    grid.push(row);
  }
  if (piece) { // if there is a piece
    piece.shapes[piece.currShape].forEach( (el, i) => {
      let [x, y] = el;
      grid[x + 2][y + 1] = (<div className={`${piece.color} tet-tile`}></div>)
    }) 
  }
return ( 
    <div className="preview grid">
      {grid}
    </div>
  );
};

export default Preview;