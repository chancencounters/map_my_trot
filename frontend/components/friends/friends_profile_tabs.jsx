import React from 'react';
import { Link } from 'react-router';

class FriendsProfileTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { location } = this.props;

    if (location === "/friends/my_friends") {
      $("a.my_friends").addClass("selected-tab");
    } else if (location === "/friends/find_friends") {
      $("a.find_friends").addClass("selected-tab");
    } else {
      $("a.friend_requests").addClass("selected-tab");
    }
  }

  componentWillReceiveProps() {
    const myFriends = $("a.my_friends");
    const findFriends = $("a.find_friends");
    const friendRequests = $("a.friend_requests");

    const { location } = this.props;
    if (location === "/friends/my_friends") {
      myFriends.addClass("selected-tab");
      findFriends.removeClass("selected-tab");
      friendRequests.removeClass("selected-tab");
    } else if (location === "/friends/find_friends") {
      myFriends.removeClass("selected-tab");
      findFriends.addClass("selected-tab");
      friendRequests.removeClass("selected-tab");
    } else {
      myFriends.removeClass("selected-tab");
      findFriends.removeClass("selected-tab");
      friendRequests.addClass("selected-tab");
    }
  }

  render() {
    return (
      <div className="friends_profile_tabs">
        <div className="friends_profile_tabs_inner">
          <Link
            className='my_friends'
            to='/friends/my_friends'
            >MY FRIENDS</Link>
          <Link
            className='friend_requests'
            to='/friends/friend_requests'
            >FRIEND REQUESTS</Link>
          <Link
            className='find_friends'
            to='/friends/find_friends'
            >FIND FRIENDS</Link>
        </div>
      </div>
    );
  }
}

export default FriendsProfileTabs;
