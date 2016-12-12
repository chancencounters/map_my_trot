import React from 'react';
import { Link } from 'react-router';
import FriendsProfileTabs from './friends_profile_tabs';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
    this.props.fetchFriendRequests();
  }

  render() {
    const { location } = this.props;
    return (
      <div className="friends_container">
        <h2>MY FRIENDS</h2>
        <FriendsProfileTabs location={ location.pathname } />
      </div>
    );
  }
}

export default Friends;
