import { FUTURE, SAVE, SCORE } from '../../actions/tetris_actions';
import { META, LEVEL } from '../../middleware/tetrisMiddleware';

const defaultState = {
  nextPiece: null,
  savePiece: null,
  score: 0,
  interval: 1,
  level: 1
}


const scoreBoard = (oldState = defaultState, action) => {
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case FUTURE:
      newState.nextPiece = action.piece;
      return newState;
    case SAVE:
      newState.savePiece = action.savePiece;
      return newState;
    case SCORE:
      newState.score += action.score;
      return newState;
    case LEVEL:
      newState.level = newState.level + 1;
      return newState;
    case META:
      newState.interval = action.interval;
      newState.level = action.level;
      return newState
    default:
      return oldState;
  }
}

export default scoreBoard;