import {
  movePiece,
  clearPiece,
  gameOver,
  placePiece,
  validPos,
  spawnPiece,
  atFloor,
  rotatePiece,
  clearLines,
  buildFreshBoard,
  hardDrop,
  rotateShifter
} from '../tetris/boardFunctions';

export const UPDATE = "UPDATE";
export const FUTURE = "FUTURE";


//action creators 
const setBoard = (board, piece) => {
  return ({
    type: UPDATE, // should be update
    board,
    piece
  });
}

const piecePreview = (piece) => {
  return ({
    type: FUTURE, // should be update
    piece
  });
}



export const newGame = () => dispatch => {
  const newPiece = spawnPiece();
  dispatch(piecePreview(spawnPiece()));
  const newBoard = buildFreshBoard();
  dispatch(_finalize(newBoard, newPiece));
}

export const pieceMover = (board, piece, dir) => dispatch => {
  let newPiece = movePiece(piece, dir);
  let newBoard = clearPiece(board, piece); //because this func returns a new board

  if (!validPos(newBoard, newPiece)) { //if not valid
    if (atFloor(newBoard, piece)) { // if not valid because the original piece is at bottom
      // if (gameOver(newBoard, newPiece)) {
      //   alert("this is the end")
      //   // newBoard = buildFreshBoard(20, `10);
      // }
      // lock it downs
      return dispatch(_clearScoredLines(board))
    } else {
      newBoard = board;
      newPiece = piece;
    }
  }
  return dispatch(_finalize(newBoard, newPiece));
}

export const rotate = (board, piece) => dispatch => {
  let newPiece = rotatePiece(piece);
  let newBoard = clearPiece(board, piece);
  if (!validPos(newBoard, newPiece)) { // if not valid
    // for when piece "can't rotate" because up against wall or something
    newPiece = rotateShifter(newBoard, newPiece);
  }
  return dispatch(_finalize(newBoard, newPiece))
}

export const hardDropper = (board, piece) => dispatch => {
  let newBoard = clearPiece(board, piece);
  let newPiece = hardDrop(newBoard, piece);
  newBoard = placePiece(newBoard, newPiece)
  dispatch(_clearScoredLines(newBoard));
  // dispatch(_finalize(newBoard, newPiece));
}


// helper functions
const _clearScoredLines = board => (dispatch, getState) => {
  let newBoard = clearLines(board);
  let newPiece = getState().tetris.scoreBoard.nextPiece;
  dispatch(piecePreview(spawnPiece()));
  // this is where I will get another piece from my state
  dispatch(_finalize(newBoard, newPiece));
  // this might need to get called errtime
};

const _finalize = (board, piece) => dispatch => { //will set the board and piece and send the updated versions to the reducers
  let newBoard = placePiece(board, piece);
  return dispatch(setBoard(newBoard, piece));
}



// need some promises? :)
// will make change to move piece and save in redux
// will then repaint board and save in redux

