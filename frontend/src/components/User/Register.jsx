import React,{ useEffect } from 'react';
import {register} from '../../store/actions/user.js';
import {connect} from 'react-redux';
const  Register =(props)=> {  
    useEffect(()=>{
        document.title="Register - Trello MERN"
    })
    const onSubmit=(ev)=>{
    ev.preventDefault()
    const formData={}
    for (const target of ev.target) {
        formData[`${target.name}`]=target.value
    }
    
    console.log(formData)
    props.dispatch(register(formData))
}
        return (

            <div className="Register">
                    <title>Register</title>
                <div className="bgregister">
    <form className="register" onSubmit={onSubmit} >
        <input type="text" name="name" className="name" placeholder="Introduce your name" 
        onFocus={e=>e.target.placeholder = ''} onBlur={e=>e.target.placeholder = 'Introduce your name'} />
        <input type="text" name="lastname" className="lastname" placeholder="Introduce your lastname"
        onFocus={e=>e.target.placeholder = ''} onBlur={e=>e.target.placeholder = 'Introduce your lastname*'}  />
        <input type="email" name="email" className="email" placeholder="Introduce your email*" 
        onFocus={e=>e.target.placeholder = ''} onBlur={e=>e.target.placeholder = 'Introduce your email*'} required={true}/>
        <input type="password" name="password" className="password" placeholder="Enter your password*" minLength={8}
         onFocus={e=>e.target.placeholder = ''} onBlur={e=>e.target.placeholder = 'Enter your password*'} required={true}/>
        <input type="password" name="passwordConfirm" className="passwordConfirm" placeholder="Confirm your password*" minLength={8}
        onFocus={e=>e.target.placeholder = ''} onBlur={e=>e.target.placeholder = 'Confirm your password*'} required={true}/>
        <label className="terms"> <input type="checkbox" required={true} /> By clicking on Sign up, you agree to David
            Trello's Terms and Conditions of Use.*
            <span className="checkmark"></span></label>
        <button type="submit" className="submit" value="Submit"> SIGN UP</button>
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
  export default connect(mapStateToProps)(Register);