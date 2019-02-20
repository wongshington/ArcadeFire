import { UPDATE, SAVE } from '../../actions/tetris_actions';

const defaultState = {
  type: 3, // the L piece
  color: "green",
  topPos: [0, 4],
  currShape: 0,
  shapes: [
    [[0, 0], [1, 0], [2, 0], [2, 1]],
    [[1, 0], [1, 1], [1, 2], [0, 2]],
    [[0, 0], [0, 1], [1, 1], [2, 1]],
    [[2, 0], [1, 0], [1, 1], [1, 2]]
  ],
  pos: [0, 4],
  current: true
}

const piece = (oldState = defaultState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE: // this will be replaced later
      return action.piece
    default:
      return oldState;
  }
}

export default piece;