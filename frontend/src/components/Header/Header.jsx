import React from 'react';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom'
const Header =()=> {
    return (
      <div className="Header">
      <Link to="/"> <img className="logo" src="/images/trello.png" alt="logo"/></Link>
        <div className="userlinks">
        <NavLink className="links" activeClassName="active" to="/login"><img src="/images/login.png" alt="login"/> Login</NavLink>
        <NavLink className="links" activeClassName="active" to="/register"><img src="/images/register.png" alt="register"/> Register</NavLink>
        </div>
      </div>
    );
}

export default Header;
