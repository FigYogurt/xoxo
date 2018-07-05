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
    winner: null
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
const streak = (board, coord1, coord2, coord3) => {
  // loops all over the coordinates
  // check if they are defined
  // checks if they are the same value
  // if both true then it returns x or O
  // if nothing else it will return undefined
  const val1 = board[coord1]
  const val2 = board[coord2]
  const val3 = board[coord3]
  if (val1 === val2 === val3){
    return val1
  } else {
    return undefined
  }
}
const winner = (board) => {
  winningValues = [
    [ [0,0], [0,1], [0,2] ],
    [ (0,0), (0,1), (0, 2) ],
    [ [2,0], [2,1], [2,2] ],
    [ [0,0], [1,0], [2,0]],
    [ [0,1], [1,1], [2,1]],
    [ [0,2], [1,2], [2,2]],
    [ [0,0], [1,1], [2,2]],
    [ [0,2], [1,1], [2,0]]

  ]
  
  for (let i = 0; i < 8; i++){
    streak(board, ...winningValues[i])
  }
  } else {
    return 'draw'
  }
}
const turnReducer = (turn='X', action)=>{
  if(action.type=== MOVE){
    return changeTurn(turn)
  }
  return turn
}
const boardReducer= (board =Map(), action)=>{
  if (action.type===MOVE){
    return board.setIn([action.row, action.col], action.turn)
  }
  return board
}
export default function reducer(state = { board: board, turn: 'X' }, action) {
    const nextBoard =  boardReducer(state.board, action);
    const winnerState = winner(board)
    return {
        turn: turnReducer(state.turn, action),
        board: nextBoard,
        winner: winnerState
      }
  }
