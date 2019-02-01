import { movePiece, clearPiece, placePiece, validPos, spawnPiece, lockedBoard, atFloor } from '../tetris/boardFunctions';
export const MOVE = "MOVE";

const moveAction = (board, piece) => {
  return ({
    type: MOVE, // should be update
    board,
    piece
  });
} 

export const pieceMover = (board, piece, dir) => dispatch => {
  let newPiece = movePiece(piece, dir);
  let newBoard = clearPiece(board, piece); //because this func returns a new board
  // debugger
  if (atFloor(newBoard, newPiece)){
    newPiece = spawnPiece();
    newBoard = board
    // lock it downs
  } else if ( !validPos(newBoard, newPiece) ){
    // debugger
    newBoard = board;
    newPiece = piece;
  }
  return dispatch(finalize(newBoard, newPiece));
}

const finalize = (board, piece) => dispatch => { //will set the board and piece and send the updated versions to the reducers
  let newBoard = placePiece(board, piece);

  return dispatch(moveAction(newBoard, piece));
}


// let newPiece = spawnPiece();


// need some promises? :)
// will make change to move piece and save in redux
// will then repaint board and save in redux
