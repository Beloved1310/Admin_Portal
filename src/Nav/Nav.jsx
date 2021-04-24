import React from 'react';
import '../CSS/Nav.css';
import {Link} from 'react-router-dom';
function Nav() {
    const navStyle = {
        color: "white"
    }

  return (
    <nav className="nav">
        <h1>Logo</h1>
        <ul className = "nav-links">
        <Link to= "/">
           <li className="navStyle">HomePage</li>
           </Link>
            <Link to="/about" style={navStyle}>
            <li>About</li>
            </Link>
            <Link to= "/login">
            <li className="navStyle">Login</li>
            </Link>
            
        </ul>
       
    </nav>
  );
}

export default Nav;
