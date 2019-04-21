import React, {  useState } from 'react';
import './user.scss';
import {login} from '../../store/actions/user.js';
import {connect} from 'react-redux';
const  Login =(props)=> {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  // const [error, setError]=useState('')
  const onSubmit=(ev)=>{
    ev.preventDefault()
    console.log(email, password)
    props.dispatch(login(email,password))
  }
  {document.title="Login - Trello MERN"}
    return (
      <div className="Login">
          <title>Login</title>
        <div className="bglogin">
          <form className="login" onSubmit={onSubmit} >
            <input type="email" value={email} onChange={e=> setEmail(e.target.value)}
             className="email" placeholder="Introduce your email*" required={true} />
            <input type="password" value={password} className="password" 
        onChange={e=> setPassword(e.target.value)}  placeholder="Enter your password*" required={true} />
            <br />
            <button type="submit" className="submit" value="Submit" > LOG IN</button>
          </form>
        </div>
      </div>
    );
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(Login);