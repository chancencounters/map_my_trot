import React from 'react';
import { Link } from 'react-router';

const ProfileTabs = () => {
  return (
    <ul className="profile_tabs">
      <li><Link to='/home/activity_feed'>ACTIVITY FEED</Link></li>
      <li><Link to='/home/dashboard'>MY DASHBOARD</Link></li>
      <li><Link to='/home/friends'>MY FRIENDS</Link></li>
      <li className="placeholder"></li>
    </ul>
  );
};

export default ProfileTabs;
