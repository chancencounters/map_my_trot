import React from 'react';
import { Link } from 'react-router';

const UserProfile = ({ currentUser }) => {
  const name = currentUser.first_name + " " + currentUser.last_name;
  return (
    <aside className="user_profile_container">
      <img src={ currentUser.image_url}/>
      <span>{ name }</span>
      <Link to="/edit_profile">Edit Profile</Link>
      <Link to="/find_friends">Find Friends</Link>
    </aside>
  );
};

export default UserProfile;
