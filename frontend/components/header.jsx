import React from 'react';
import { Link } from 'react-router';

const Header = ({ currentUser, logout }) => {
  return (
    <header className="main_header">
      <div className="main_header_inner">
        <img src="/assets/horse_logo.jpg"/>
        <h1>mapmytrot</h1>
        <span>Trots</span>
        <span>Routes</span>
        if (currentUser) {
          <div>
            <button onClick={ logout }>Logout</button>
            <img src="/assets/default_prof_pic.jpg"/>
          </div>
        } else {
          <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </div>
        }
      </div>
    </header>
  )
};


export default Header;
