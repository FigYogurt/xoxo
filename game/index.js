import { Map } from 'immutable';
import { createStore } from 'redux';

let board = Map();
// board = board.setIn([1, 1], 'X');

// action
const MOVE = 'MOVE';

export const move = ([row, col], turn) => {
  const action = {
    row,
    col,
    turn,
    type: MOVE,
  };
  return action;
};

export default function reducer(state = { board: Map(), turn: 'X' }, action) {
  switch (action.type) {
    case MOVE:
      return {
        board: board.setIn([action.row, action.col], move.action.turn),
      };
    default:
      return state;
  }
}
