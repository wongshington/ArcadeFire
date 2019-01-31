import {connect} from 'react-redux'

import Board from "./board";
import { pieceMover } from '../actions/tetris_actions';

const mSP = ({tetris: {board, piece}}) => {
  return ({
  board,
  piece
});
}

const mDP = dispatch => ({
  pieceMover: (board, piece, dir) => pieceMover(board, piece, dir)
})

export default connect(mSP, mDP)(Board);