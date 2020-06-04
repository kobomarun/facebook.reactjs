import React from "react";
import { useHistory } from 'react-router-dom'
import Logo from '../logo.png';
import "../style.css";

const Nav = () => {
  const history = useHistory()
  const logOut = () => {
    alert('Logging out')
    localStorage.removeItem('auth');
    window.location.href = '/'
    history.push('/')
}
  return (
    <nav className="nav">
      <div className="nav-items">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-items">
        <input
          type="text"
          className="searchform"
          placeholder="Search for businesses here"
        />
      </div>
     {
       localStorage.getItem('auth') && (
        <div>
        <button onClick={logOut}>logout</button>
      </div>
       )
     }
    </nav>
  );
};

export default Nav;
