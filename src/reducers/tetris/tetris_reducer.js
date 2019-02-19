import { combineReducers } from 'redux';
import piece from './piece_reducer.js';
import board from './board_reducer.js';
import scoreBoard from './scoreBoard_reducer.js';

const tetrisReducer = combineReducers({
  board, 
  piece,
  scoreBoard
})
export default tetrisReducer;