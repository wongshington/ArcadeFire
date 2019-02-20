import { connect } from 'react-redux';
import Scoreboard from './scoreboard.jsx';

import { newGame } from '../actions/tetris_actions';
const mSP = state => {
  return ({
    nextPiece: state.tetris.scoreBoard.nextPiece
  })
}

const mDP = dispatch => {
  return ({
    newGame: () => dispatch(newGame())
  })
}

export default connect(mSP, mDP)(Scoreboard);