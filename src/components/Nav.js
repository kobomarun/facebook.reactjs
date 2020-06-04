import React from "react";
import Logo from '../logo.png';
import "../style.css";

const Nav = ({logOut}) => {
  return (
    <nav className="nav">
      <div className="nav-items">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-items">
        <input
          type="text"
          className="searchform"
          placeholder="Search Faceclone"
        />
      </div>
      <div>
        <button onClick={logOut}>logout</button>
      </div>
    </nav>
  );
};

export default Nav;
