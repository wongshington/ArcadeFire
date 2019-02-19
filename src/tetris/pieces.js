export const pieces = {
  1: {
      type: 1, // the line piece
      color: "red",
      topPos: [0, 4], //might just need one pos key
      currShape: 0, //need to keep track of current shape?
      shapes: [ //long piece
        [[0, 0], [0, 1], [0, 2], [0, 3]],
        [[0, 0], [1, 0], [2, 0], [3, 0]]
      ],
      pos: [0, 4], // where it is currently? not sure if i need this
      current: true // only one will be true at a time
    },
  2: {
      type: 2, // the T piece
      color: "blue",
      topPos: [0, 4], 
      currShape: 1, 
      shapes: [ 
        [[0, 0], [1, 0], [2, 0], [1, 1]],
        [[1, 0], [1, 1], [1, 2], [0, 1]],
        [[1, 0], [1, 1], [0, 1], [2, 1]],
        [[1, 0], [1, 1], [1, 2], [2, 1]]
      ],
      pos: [0, 4], 
      current: true 
    },
  3: {
      type: 3, // the L piece
      color: "green",
      topPos: [0, 4], 
      currShape: 1, 
      shapes: [ 
        [[0, 0], [1, 0], [2, 0], [2, 1]],
        [[1, 0], [1, 1], [1, 2], [0, 2]],
        [[0, 0], [0, 1], [1, 1], [2, 1]],
        [[2, 0], [1, 0], [1, 1], [1, 2]]
      ],
      pos: [0, 4], 
      current: true 
    },
  4: {
      type: 4, // the reverse L piece or J piece
      color: "yellow",
      topPos: [0, 4], 
      currShape: 3, 
      shapes: [ 
        [[0, 1], [1, 1], [2, 1], [2, 0]],
        [[1, 0], [1, 1], [1, 2], [2, 2]],
        [[0, 1], [1, 1], [2, 1], [0, 2]],
        [[0, 0], [1, 0], [1, 1], [1, 2]]
      ],
      pos: [0, 4], 
      current: true 
    },
  5: {
      type: 5, // square piece
      color: "pink",
      topPos: [0, 4], 
      currShape: 0, 
      shapes: [ 
        [[0, 0], [0, 1], [1, 1], [1, 0]],
      ],
      pos: [0, 4], 
      current: true 
    },
  6: {
      type: 6, // S piece
      color: "orange",
      topPos: [0, 4], 
      currShape: 0, 
      shapes: [ 
        [[0, 1], [0, 2], [1, 1], [1, 0]],
        [[0, 0], [1, 0], [1, 1], [2, 1]],
      ],
      pos: [0, 4], 
      current: true 
    },
  7: {
      type: 7, // Z piece
      color: "purple",
      topPos: [0, 4], 
      currShape: 0, 
      shapes: [ 
        [[0, 0], [0, 1], [1, 1], [1, 2]],
        [[1, 0], [1, 1], [2, 0], [0, 1]],
      ],
      pos: [0, 4], 
      current: true 
    },
};
