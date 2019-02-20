import { FUTURE, SAVE } from '../../actions/tetris_actions';

const defaultState = {
  nextPiece: null,
  savePiece: null,
  score: 0
}


const scoreBoard = (oldState = defaultState, action) => {
  let newState;
  switch (action.type) {
    case FUTURE:
      newState = Object.assign({}, oldState);
      newState.nextPiece = action.piece;
      return newState;
    case SAVE:
      newState = Object.assign({}, oldState);
      newState.savePiece = action.savePiece;
      return newState;
    default:
      return oldState;
  }
}

export default scoreBoard;