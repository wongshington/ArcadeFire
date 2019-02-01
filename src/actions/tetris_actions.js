import { movePiece, clearPiece, placePiece, validPos } from '../tetris/boardFunctions';

export const MOVE = "MOVE";

const moveAction = (board, piece) => {
  return ({
    type: MOVE,
    board,
    piece
  });
} 

export const pieceMover = (board, piece, dir) => dispatch => {
  let newPiece = movePiece(piece, dir);
  let newBoard = clearPiece(board, piece); //because this func returns a new board
  if ( !validPos(newBoard, newPiece) ){
    return dispatch(moveAction(board, piece));
  }
  return dispatch(finalize(newBoard, newPiece));
}

const finalize = (board, piece) => dispatch => { //will set the board and piece and send the updated versions to the reducers
  let newBoard = placePiece(board, piece);

  return dispatch(moveAction(newBoard, piece));
}

// need some promises? :)
// will make change to move piece and save in redux
// will then repaint board and save in redux
