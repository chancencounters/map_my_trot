import React from 'react';
import { Link } from 'react-router';
import FriendsProfileTabs from './friends_profile_tabs';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchFriends,
      fetchFriendships,
      fetchPotentialFriends
    } = this.props;

    fetchFriends().then(
      () => fetchFriendships()).then(
        () => fetchPotentialFriends() );

  }

  render() {
    const { children, location } = this.props;
    return (
      <div className="friends_container">
        <h2>MY FRIENDS</h2>
        <FriendsProfileTabs location={ location.pathname }  />
        { children }
      </div>
    );
  }
}

export default Friends;
