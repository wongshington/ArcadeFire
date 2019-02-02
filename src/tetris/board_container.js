import {connect} from 'react-redux'

import Board from "./board";
import { pieceMover, rotate } from '../actions/tetris_actions';

const mSP = ({tetris: {board, piece}}) => {
  
  return ({
  board,
  piece
});
}

const mDP = dispatch => ({
  pieceMover: (board, piece, dir) => dispatch(pieceMover(board, piece, dir)),
  rotate: (board, piece) => dispatch(rotate(board, piece))
})

export default connect(mSP, mDP)(Board);