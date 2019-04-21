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
 export function register(formData){
    const request=axios.post('/api/user/signup',formData).then(res=> res.data )
    return {
     type: 'REGISTER',
     payload: request
    }
 }