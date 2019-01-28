import { combineReducers } from 'redux';
import memory from './memory_reducer';
import tetris from './tetris_reducer';


const root = combineReducers({
  memory,
  tetris
})

export default root;