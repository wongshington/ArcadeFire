import {connect} from 'react-redux'

import Board from "./board";
import { pieceMover, rotate, hardDropper, newGame} from '../actions/tetris_actions';

const mSP = ({tetris: {board, piece}}) => {
  
  return ({
  board,
  piece
});
}

const mDP = (dispatch, state) => {
  return ({
  pieceMover: (board, piece, dir) => dispatch(pieceMover(board, piece, dir)),
  rotate: (board, piece) => dispatch(rotate(board, piece)),
  newGame: () => dispatch(newGame()),
  hardDropper: (board, piece) => dispatch(hardDropper(board, piece))
})
}

export default connect(mSP, mDP)(Board);