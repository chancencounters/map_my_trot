import React from 'react';
import { Link } from 'react-router';

const Shortcuts = () => {
  return (
    <nav className="shortcuts">
      <div className="shortcuts_inner">
        <div className="shortcut_links">
          <Link to='/create_route'>Create Route</Link>
          <Link to='/log_trot'>Log Trot</Link>
          <Link to='/friends/find_friends'>Find Friends</Link>
        </div>
      </div>
    </nav>
  );
};

export default Shortcuts;
