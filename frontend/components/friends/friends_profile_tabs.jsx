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
      $("a.invite_friends").addClass("selected-tab");
    }
  }

  componentWillReceiveProps() {
    const myFriends = $("a.my_friends");
    const findFriends = $("a.find_friends");
    const inviteFriends = $("a.invite_friends");

    const { location } = this.props;
    if (location === "/friends/my_friends") {
      myFriends.addClass("selected-tab");
      findFriends.removeClass("selected-tab");
      inviteFriends.removeClass("selected-tab");
    } else if (location === "/friends/find_friends") {
      myFriends.removeClass("selected-tab");
      findFriends.addClass("selected-tab");
      inviteFriends.removeClass("selected-tab");
    } else {
      myFriends.removeClass("selected-tab");
      findFriends.removeClass("selected-tab");
      inviteFriends.addClass("selected-tab");
    }
  }

  render() {
    return (
      <div className="friends_profile_tabs">
        <Link
          className='my_friends'
          to='/friends/my_friends'
          >MY FRIENDS</Link>
        <Link
          className='find_friends'
          to='/friends/find_friends'
          >FIND FRIENDS</Link>
        <Link
          className='invite_friends'
          to='/friends/invite_friends'
          >INVITE FRIENDS</Link>
        <div className="placeholder"/>
      </div>
    );
  }
}

export default FriendsProfileTabs;
