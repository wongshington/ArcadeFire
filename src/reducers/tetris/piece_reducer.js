import { MOVE } from '../../actions/tetris_actions';

const defaultState = {
    type: 1,
    color: "red",
    topPos: [0, 4], //might just need one pos key
    currShape: 0, //need to keep track of current shape?
    shapes: [ //long piece
      [[0, 0], [1, 0], [2, 0], [3, 0]],
      [[0, 0], [0, 1], [0, 2], [0, 3]],
    ],
    pos: [0, 4], // where it is currently? not sure if i need this
    current: true // only one will be true at a time
  }


const piece = (oldState = defaultState, action) => {
  // debugger
  switch (action.type) {
    case MOVE: // this will be replaced later
      return action.piece
    default:
      return oldState;
  }
}

export default piece;