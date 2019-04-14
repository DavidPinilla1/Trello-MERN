import axios from 'axios';

export function getboards(){
    const request=axios.get('/api/board/all',).then(res=>res.data)
    return {
     type: 'GET_BOARDS',
     payload: request
    }
 }

export function newBoard(title){
   const request=axios.post('/api/board/new',{title}).then(res=>res.data)

   return {
    type: 'ADD_BOARD',
    payload: request
   }
}