import React,{ useEffect } from 'react';
import './user.scss';
import {register} from '../../store/actions/user.js';
const  Register =(props)=> {  
    useEffect(()=>{
        document.title="Register - Trello MERN"
    })
    const onSubmit=(ev)=>{
    ev.preventDefault()
    console.log(ev)
    // props.dispatch(register())
  }
        return (

            <div className="Register">
                    <title>Register</title>
                <div className="bgregister">
    {/* <form className="register" onSubmit={onSubmit} >
        <input type="text" name="name" className="name" placeholder="Introduce your name" />
        <input type="text" name="lastname" className="lastname" placeholder="Introduce your lastname" />
        <input type="email" name="email" className="email" placeholder="Introduce your email*"  required={true}/>
        <input type="password" name="password" className="password" placeholder="Enter your password*" minLength="8" required={true}/>
        <input type="password" name="passwordConfirm" className="passwordConfirm" placeholder="Confirm your password*" onFocus={this.placeholder = ''}  required={true} onInput="check(this)"/>
        <label className="terms"> <input type="checkbox" required="true" /> By clicking on Sign up, you agree to David
            Travel Agency's Terms and Conditions of Use.*
            <span className="checkmark"></span></label>
        <button type="submit" className="submit" value="Submit"> SIGN UP</button>
    </form> */}

</div>
</div>
        );
}

export default Register;
