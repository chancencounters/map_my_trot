import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h2>Welcome, { currentUser.username }</h2>
        <button onClick={ logout }>Logout</button>
      </div>
    )
  } else {
    return (
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    )
  }
};


export default Greeting;
