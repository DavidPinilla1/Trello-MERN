import axios from 'axios';
import store from '../index.js'
export function getBoards(){
    axios.get('/api/board/all',{headers:{authorization:localStorage.getItem('authorization')}})
    .then(res=>store.dispatch({
       type:'GET_BOARDS',
       payload:res.data
    })).catch(console.log)
    
 }
 export function getBoardById(id){
    axios.get(`/api/board/${id}`).then(res=>store.dispatch({
      type:'GET_BOARD_BY_ID',
      payload:res.data
   })).catch(console.log)
 }
 export function clearBoard(){
   return {
    type: 'CLEAR_BOARD'
   }
}
export function newBoard(title){
   axios.post('/api/board/new',{title}).then(res=>store.dispatch({
      type:'ADD_BOARD',
      payload:res.data
   })).catch(console.log)
}
export function updateLists(id,lists){
   axios.patch(`/api/board/update/${id}`,{lists}).then(res=>store.dispatch({
      type:'UPDATE_LISTS',
      payload:res.data
   })).catch(console.log)
}
