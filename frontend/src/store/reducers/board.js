export default function(state = {}, action) {
    switch (action.type) {
      case 'GET_BOARDS_FULFILLED':
      return{...state, boards:action.payload}
     
      case 'GET_BOARD_BY_ID_FULFILLED':
      return{...state,"currentBoard":action.payload}

      case 'CLEAR_BOARD':
      return{...state,"currentBoard":{}}

      case 'UPDATE_LISTS_FULFILLED':
      return{...state,"currentBoard":action.payload}

      case 'ADD_BOARD_FULFILLED':
      return{...state,"boards":[...state.boards,action.payload]}
      default:
        return state;
    }
    
  }