import { FUTURE } from '../../actions/tetris_actions';

const defaultState = {
  nextPiece: {},
  score: 0
}


const scoreBoard = (oldState = defaultState, action) => {
  let newState;
  switch (action.type) {
    case FUTURE:
      newState = Object.assign({}, oldState);
      newState.nextPiece = action.piece;
      return newState;
    default:
      return oldState;
  }
}

export default scoreBoard;