import { combineReducers } from 'redux';
import memory from './memory_reducer';


const root = combineReducers({
  memory
})

export default root;