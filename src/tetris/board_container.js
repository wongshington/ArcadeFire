import {connect} from 'react-redux'

import Board from "./board";
import { keydown } from '../actions/tetris_actions';

const mSP = state => ({
  
})

const mDP = dispatch => ({
  keydown: () => dispatch(keydown)
})

export default connect(null, mDP)(Board);