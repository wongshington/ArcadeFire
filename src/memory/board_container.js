import {connect} from 'react-redux';
import Board from './board'

const mSP = state => {

  return ({
    stater: "value"
  })
}

const mDP = dispatch => {

  return ({
    dispatcher: "value" 
  })
}

export default connect(mSP, mDP)(Board)