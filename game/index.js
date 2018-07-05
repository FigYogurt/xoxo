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

const changeTurn = turn => {
  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
  return turn;
};

export default function reducer(state = { board: board, turn: 'X' }, action) {
  switch (action.type) {
    case MOVE:
      return {
        turn: changeTurn(action.turn),
        board: board.setIn([action.row, action.col], action.turn),
      };
    default:
      return state;
  }
}
