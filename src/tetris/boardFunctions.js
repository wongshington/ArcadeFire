// const updatePiece = function(piece, dir){
//   let newPos = piece.positions.map(el => [el[0] + dir[0], el[1] + dir[1]]);
//   piece.positions = newPos;
// }

// board will be stored in redux
// current piece object will be stored in redux
// dir has been sent to function from keydown
// dir == [1,0] // move down one row

import { pieces } from './pieces';


const deepDup = function (item) {
  const newItem = JSON.parse(JSON.stringify(item)); //creates a JSON string first, then a new object from the string 
  return newItem
}

export const movePiece = function(piece, dir){ //returns new piece
  const newPiece = deepDup(piece);
  newPiece.pos[0] += dir[0];
  newPiece.pos[1] += dir[1];
  
  return newPiece;
}

export const rotatePiece = function (piece) { 
  let newPiece = deepDup(piece); //dup the piece
  newPiece.currShape = (piece.currShape + 1) % piece.shapes.length; //rotates the piece "forward"
  // really we're just designating a new shape for the piece that we can use later to build the piece;
  return newPiece;
}

export const placePiece = function(board, piece){ //should return a new board
  const newBoard = deepDup(board);
  const [x, y] = piece.pos //the coords for the current position of the piece
  piece.shapes[piece.currShape].forEach( el => { //iterate over the piece's current shape coords
    let [x2, y2] = [el[0] + x, el[1] + y]
    newBoard[x2][y2] = piece.type;
  })
  return newBoard;
}

export const buildFreshBoard = (height, width) => { // returns fresh new board

  let board = [];
  let row = [];
  for (let i = 0; i < width; i++) { //creates a row the correct width
    row.push(0); // 0 represents the empty type space
  }
  for (let i = 0; i < height; i++) { //here we'll use our row and make many copies of it
    board.push(row.slice()); 
    //slice is a little faster than a loop
    // https://stackoverflow.com/questions/3978492/fastest-way-to-duplicate-an-array-in-javascript-slice-vs-for-loop
  }
  return board;
}

export const atFloor = (board, piece) => { //evaluates to true if i hit another piece from the side (BUG)
  // can pass in the failed board attempt but old piece
  
  let bool = piecePositions(piece).some(pos => {
    let [x, y] = pos;
    return (board[x + 1] == undefined || board[x + 1][y] > 0) // if any of the next lower spaces is the floor
  })
  return bool
}

const piecePositions = function(piece){
  let positions = piece.shapes[piece.currShape].map( coord => {
      let x = coord[0] + piece.pos[0]
      let y = coord[1] + piece.pos[1]
      return [x,y]
  })
  return positions
}

export const clearLines = function(board){ // returns new board
  const newBoard = deepDup(board);
  let lineCount = 0;
  let i = 0;
  while (i < newBoard.length){
    let row = newBoard[i];
    if (row.every( el => el > 0)) {
      lineCount ++;
      newBoard.splice(i, 1) //removes this one row from the board;
      const newRow = new Array(board[0].length).fill(0) //creates a new array where length == board's width and fills it with 0's
      newBoard.unshift(newRow);
      continue; // this way it doesn't increment the counter and skip a line in the board
    }
    i ++;
  }
  console.log("line count", lineCount); //for scoring later on
  return newBoard;
};

export const clearPiece = function(board, piece){ //returns new board
  let newBoard = deepDup(board);
  const [x, y] = piece.pos //the coords for the current position of the piece
  piece.shapes[piece.currShape].forEach(el => { //iterate over the piece's current shape coords
    let [x2, y2] = [el[0] + x, el[1] + y]
    newBoard[x2][y2] = 0; //resets the place where the piece used to be
  })
  return newBoard; 
}

export const validPos = function (board, piece) { //returns boolean
  let height = board.length;
 // refactor to use piecePositions method
  const [x, y] = piece.pos;
  let bool = piece.shapes[piece.currShape].every(el => { //iterate over the piece's current shape coords
    let [x2, y2] = [el[0] + x, el[1] + y];
    if (x2 >= height || x2 < 0) {
      return false
    }
    return (board[x2][y2] < 1);
  })
  return bool
}

export const spawnPiece = function(){ // returns new piece
  
  let idx = Math.floor(Math.random() * 7 ) + 1 // pick random pieces[idx]
  let newPiece = pieces[idx];
  return newPiece;
}

export const hardDrop = (board, piece) => {
  // check if piece is at bottom and if not move it down one and check again

  let newPiece = deepDup(piece)
  let dropping = true
  let oldPiece;

  while (dropping) {
    // debugger
    if (atFloor(board, newPiece)) {
      return newPiece
    } else {
      oldPiece = newPiece
      newPiece = movePiece(newPiece, [1, 0])
      if (!validPos(board, newPiece)) {
        newPiece = oldPiece;
        dropping = false;
      }
    }
  }
  debugger
  return newPiece
}








// work in progress
// export const gameOver = (board, piece) => {
//   // run this after spawning a new piece but before finalize with that piece
//   return ( !validPos(board, piece) && atFloor(board, piece) ) //must be a valid pos and not at the floor
// }