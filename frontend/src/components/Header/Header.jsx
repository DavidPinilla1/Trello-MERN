import React, { Component } from 'react';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div className="Header">
      <Link to="/"> <img className="logo" src="./images/trello.png" alt="logo"/></Link>
        <div className="userlinks">
        <NavLink className="links" to="/login"><img src="images/login.png" alt="login image"/> Login</NavLink>
        <NavLink className="links" to="/register"><img src="./images/register.png" alt="register image"/> Register</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
