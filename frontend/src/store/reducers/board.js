import { newBoard } from "../actions/board";

export default function(state = {}, action) {
    switch (action.type) {
      case 'GET_BOARDS_FULFILLED':
      return{...state, boards:action.payload}
     
      case 'ADD_BOARD_FULFILLED':
      return{...state,"boards":[...state.boards,action.payload]}
      default:
        return state;
    }
    
  }