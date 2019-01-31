// const updatePiece = function(piece, dir){
//   let newPos = piece.positions.map(el => [el[0] + dir[0], el[1] + dir[1]]);
//   piece.positions = newPos;
// }

// const movePiece = function (board, piece, dir) {
//   let boardDup = board.boardDup(); //deep copy of the board will likely be abstracted out of this
//   piece.positions.forEach( el => boardDup[el[0]][el[1]] = 0) // reset to zero?
//   updatePiece(piece, dir); //changes piece.positions
//   let type = piece.type;
//   piece.positions.forEach( el => boardDup[el[0]][el[1]] = type) // 

//   return boardDup;
// }

const deepDup = function(item){
  const newItem = JSON.parse(JSON.stringify(item)); //creates a JSON string first, then a new object from the string 
  return newItem
}

// movePiece(theBoard, piece1, [1, 0])

// board will be stored in redux
// current piece object will be stored in redux
// dir has been sent to function from keydown
// dir == [1,0] // move down one row



const theBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
];

const piece1 = {
  type: 1,
  color: "red",
  topPos: [0, 4], //might just need one pos key
  currShape: 0, //need to keep track of current shape?
  shapes: [ //long piece
    [[0, 0], [0, 1], [0, 2], [0, 3]],
    [[0, 0], [1, 0], [2, 0], [3, 0]]
  ],
  pos: [0, 4], // where it is currently? not sure if i need this
  current: true // only one will be true at a time
}
const deepDup = function (item) {
  const newItem = JSON.parse(JSON.stringify(item)); //creates a JSON string first, then a new object from the string 
  return newItem
}
const movePiece = function(piece, dir){
  console.log(piece.pos)
  const newPiece = deepDup(piece);
  newPiece.pos[0] += dir[0];
  newPiece.pos[1] += dir[1];
  
  return newPiece;
}

// movePiece(piece1, [1,0]); //down one

const rotatePiece = function (piece) { 
  let newPiece = deepDup(piece); //dup the piece
  newPiece.currShape = (piece.currShape + 1) % piece.shapes.length; //rotates the piece "forward"
  // really we're just designating a new shape for the piece that we can use later to build the piece;
  return newPiece;
}

// rotatePiece(piece1)

const placePiece = function(board, piece){ //should return a new board
  const newBoard = deepDup(board);
  const [x, y] = piece.pos //the coords for the current position of the piece
  piece.shapes[piece.currShape].forEach( el => { //iterate over the piece's current shape coords
    let [x2, y2] = [el[0] + x, el[1] + y]
    newBoard[x2][y2] = piece.type;
  })
  return newBoard;
}

placePiece(theBoard, piece1)

function buildNewBoard(height, width){ // returns new board

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

const lockBoard = function(board){ 
  //dispatches action to make new current piece
}

