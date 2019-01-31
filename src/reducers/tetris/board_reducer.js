
const defaultState = {board: [["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
["white", "white", "white", "white", "white", "red", "white", "white", "white", "white"],
]};

const board = (oldState = defaultState, action) => {
  switch (action.tye) {
    case "up": // this will be replaced later
      
      break;
  
    default:
      return oldState;
  }
}

export default board;