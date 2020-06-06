import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom'

import "../style.css";

const Nav = () => {
  const history = useHistory()
  const [ search, searchTerm ] = useState('')
  const logOut = () => {
    alert('Logging out')
    localStorage.removeItem('auth');
    window.location.href = '/'
    history.push('/')
}
  // function searchBusiness() {
  //   console.log(search)
  // }
  

  return (
    <nav className="nav">
      <div className="nav-items">
       <Link to="/"><h2>Business Directory</h2></Link>
      </div>
      <div className="nav-items">
        <input
          type="text"
          className="searchform"
          placeholder="Search for businesses here"
          onChange={(e) => searchTerm(e.target.value)}
          
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
