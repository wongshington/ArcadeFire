import { connect } from 'react-redux';
import Scoreboard from './scoreboard.jsx';

import { newGame } from '../actions/tetris_actions';
const mSP = ({tetris}) => {
  let score = tetris.scoreBoard.score;
  let message = "Have you even played this game before?"
  if (score < 1000){
    message = "WEAK SAWCE!"
  } else if (score <2000) {
    message = "Still weak breh..."
  }
  return ({
    nextPiece: tetris.scoreBoard.nextPiece,
    score: tetris.scoreBoard.score,
    message: message
  })
}

const mDP = dispatch => {
  return ({
    newGame: () => dispatch(newGame())
  })
}

export default connect(mSP, mDP)(Scoreboard);