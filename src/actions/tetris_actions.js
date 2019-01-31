import { movePiece, clearPiece, placePiece } from '../tetris/boardFunctions';

export const MOVE = "MOVE";

const moveAction = (board, piece, dir) => ({
  type: MOVE,
  board: pieceMover(board, piece, dir)
})

export const pieceMover = (board, piece, dir) => {
  let newPiece = movePiece(piece, dir);
  let newBoard = clearPiece(board, piece); //because this func returns a new board
  newBoard = placePiece(newBoard, newPiece);
  return newBoard;
}
// need some promises :)
// will make change to move piece and save in redux
// will then repaint board and save in redux

