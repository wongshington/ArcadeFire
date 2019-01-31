import {connect} from 'react-redux'

import Board from "./board";
import { keydown } from '../actions/tetris_actions';

const mSP = state => {
  debugger
  return ({
  board: state.tetris.board
});
}

const mDP = dispatch => ({
  keydown: () => dispatch(keydown)
})

export default connect(mSP, mDP)(Board);