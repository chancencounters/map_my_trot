import React from 'react';
import { Link } from 'react-router';

const Shortcuts = () => {
  return (
    <nav className="shortcuts">
      <div className="shortcuts_inner">
        <ul className="shortcut_links">
          <li><Link to='/create_route'>Create Route</Link></li>
          <li><Link to='/log_trot'>Log Trot</Link></li>
          <li><Link to='/find_friends'>Find Friends</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Shortcuts;
