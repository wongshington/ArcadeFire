import { combineReducers } from 'redux';
import piece from './piece_reducer.js';
import board from './board_reducer.js';

const tetrisReducer = combineReducers({
  board, 
  piece
})
export default tetrisReducer;