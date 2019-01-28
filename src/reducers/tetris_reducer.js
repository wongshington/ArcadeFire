import {TYPE_1} from "../actions/tetris_actions";

const tetrisReducer = (state = {}, action) => {
  // debugger
  switch (action.info) {
    case TYPE_1:
    console.log("herer??????")
      return {info: "yes"}

    default:
    return {}
  }
  
}

export default tetrisReducer;