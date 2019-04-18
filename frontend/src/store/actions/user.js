import axios from'axios';
export function login(email,password){
    const request=axios.post('/api/user/login/',{email,password}).then(res=>{
        localStorage.setItem('authorization',res.headers.authorization)
        return res.data
    })
    return {
     type: 'LOGIN',
     payload: request
    }
 }
 export function register(email,password){
    const request=axios.post('/api/user/register/',{email,password}).then(res=> res.data )
    return {
     type: 'REGISTER',
     payload: request
    }
 }