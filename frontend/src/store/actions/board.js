import axios from 'axios';

export function getBoards(){
    const request=axios.get('/api/board/all',{headers:{authorization:localStorage.getItem('authorization')}}).then(res=>res.data).catch(console.log)
    return {
     type: 'GET_BOARDS',
     payload: request
    }
 }
 export function getBoardById(id){
    const request=axios.get(`/api/board/${id}`).then(res=>res.data).catch(console.log)
    return {
     type: 'GET_BOARD_BY_ID',
     payload: request
    }
 }
 export function clearBoard(){
   return {
    type: 'CLEAR_BOARD'
   }
}
export function newBoard(title){
   const request=axios.post('/api/board/new',{title}).then(res=>res.data).catch(console.log)

   return {
    type: 'ADD_BOARD',
    payload: request
   }
}
export function updateLists(id,lists){
   const request=axios.patch(`/api/board/update/${id}`,{lists}).then(res=>res.data).catch(console.log)

   return {
    type: 'UPDATE_LISTS',
    payload: request
   }
}
