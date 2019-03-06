import {
  movePiece,
  clearPiece,
  gameOver,
  countLines,
  placePiece,
  validPos,
  spawnPiece,
  atFloor,
  rotatePiece,
  clearLines,
  buildFreshBoard,
  hardDrop,
  rotateShifter,
  resetPiece
} from '../tetris/boardFunctions';

export const UPDATE = "UPDATE";
export const FUTURE = "FUTURE";
export const SAVE = "SAVE";
export const SCORE = "SCORE";
export const GAME_OVER = "GAME_OVER";
export const NEW_GAME = "NEW_GAME";
export const RESET_INTERVAL = "RESET_INTERVAL";
// export const META = "META";


//data action creators 
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

const savePiece = (savePiece) => {
  return ({
    type: SAVE, // should be update
    savePiece
  });
}

const scoreAction = (score) => {
  return ({
    type: SCORE,
    score
  });
}


// messenger action creators
const endGame = () => {
  return ({
    type: GAME_OVER
  });
}

const startGame = () => {
  return ({
    type: NEW_GAME
  });
}

const resetInterval = () => {
  return ({
    type: RESET_INTERVAL
  });
}



export const newGame = () => dispatch => {
  const newPiece = spawnPiece();
  dispatch(piecePreview(spawnPiece()));
  const newBoard = buildFreshBoard();
  dispatch(_finalize(newBoard, newPiece));
  dispatch(startGame());
}
 
export const pieceMover = (board, piece, dir) => dispatch => {
  let newPiece = movePiece(piece, dir);
  let newBoard = clearPiece(board, piece); //because this func returns a new board

  if (!validPos(newBoard, newPiece)) { //if not valid
    if (atFloor(newBoard, piece)) { // if not valid because the original piece is at bottom
      return dispatch(_clearScoredLines(board))
    } else {
      newBoard = board;
      newPiece = piece;
    }
  }
  dispatch(_finalize(newBoard, newPiece));
}

export const rotate = (board, piece) => dispatch => {
  let newPiece = rotatePiece(piece);
  let newBoard = clearPiece(board, piece);
  if (!validPos(newBoard, newPiece)) { // if not valid
    // for when piece "can't rotate" because up against wall or something
    newPiece = rotateShifter(newBoard, newPiece);
  }
  dispatch(_finalize(newBoard, newPiece))
}

export const hardDropper = (board, piece) => dispatch => {
  dispatch(resetInterval());
  let newBoard = clearPiece(board, piece);
  let newPiece = hardDrop(newBoard, piece);
  newBoard = placePiece(newBoard, newPiece)
  dispatch(_clearScoredLines(newBoard));
} 

export const saver = () => (dispatch, getState) => {
  let savedPiece = getState().tetris.scoreBoard.savePiece;
  let currPiece = getState().tetris.piece;
  let board = clearPiece(getState().tetris.board,currPiece);
  
  if (!savedPiece){ // if the first time saving a piece
    savedPiece = resetPiece(currPiece);
    currPiece = getState().tetris.scoreBoard.nextPiece;
    dispatch(piecePreview(spawnPiece())); // generate a future piece
  } else {
    [savedPiece, currPiece] = [resetPiece(currPiece), resetPiece(savedPiece)]
  }
  // will need to lock out switching until the piece is placed so can't just switch and switch forever
  dispatch(savePiece(savedPiece));
  dispatch(_finalize(board, currPiece));
}
 

// helper functions
const _clearScoredLines = board => (dispatch, getState) => {
  let score = countLines(board);
  dispatch(scoreAction(score))
  let newBoard = clearLines(board);
  let newPiece = getState().tetris.scoreBoard.nextPiece;
  dispatch(piecePreview(spawnPiece()));
  // this is where I will get another piece from my state
  dispatch(_finalize(newBoard, newPiece));
  // this might need to get called errtime
};

const _finalize = (board, piece) => dispatch => { //will set the board and piece and send the updated versions to the reducers
  // put gameOver here?
  if ( gameOver(board, piece) ){
    dispatch( endGame() );
  } else {
    let newBoard = placePiece(board, piece);
    dispatch(setBoard(newBoard, piece));
  }
}



// need some promises? :)
// will make change to move piece and save in redux
// will then repaint board and save in redux

