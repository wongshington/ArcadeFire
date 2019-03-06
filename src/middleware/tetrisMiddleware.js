import { pieceMover } from '../actions/tetris_actions';

export const META = "META";
export const LEVEL = "LEVEL";


export const endGame = ({dispatch, getState}) => next => action => {
      next(action);
      if (action.type == "GAME_OVER"){
        console.log("this is my middleWare: end Game")
      }
  }

export const gameFlow = ({dispatch, getState}) => next => action => {
      if (action.type == "NEW_GAME" || action.type == "RESET_INTERVAL"){
        dispatch(_meta)
      } else{
        next(action);
      }
  }

export const leveler = ({ dispatch, getState }) => next => action => {
  let { score, level }  = getState().tetris.scoreBoard;
  if (Math.floor(score / 8000) > level){
    dispatch(_levelAction());
  }
  next(action);
}


// helper methods
const _meta = () => (dispatch, getState) => {
  let { scoreBoard, board, piece } = getState().tetris;
  window.clearInterval(scoreBoard.interval);
  let level = _intervalHelper(scoreBoard.level);
  let interval = window.setInterval(() => pieceMover(board, piece, [1, 0]), level);
  dispatch({ type: META, interval, level });
}

const _levelAction = (score) => {
  return ({
    type: LEVEL
  });
}

const _intervalHelper = (level) => {
  switch (level) {
    case 2: 
      return 1000;
    case 3: 
      return 900;
    case 4: 
      return 800;
    case 5: 
      return 700;
    case 6: 
      return 600;
    case 7: 
      return 600;
    case 8: 
      return 500;
    case 9: 
      return 450;
    case 10: 
      return 400;
    default:
      return 1100;
  }
}


