import React from 'react';
import { Link } from 'react-router';

class FriendsProfileTabs extends React.Component {
  constructor(props) {
    super(props);
    this.isSelectedTab = this.isSelectedTab.bind(this);
  }

  isSelectedTab(tabName) {
    const { location } = this.props;
    return location === tabName ?  "selected" : ""
  }

  render() {
    const { isSelectedTab } = this;

    return (
      <div className="friends_profile_tabs">
        <div className="friends_profile_tabs_inner">
          <Link
            className={`my_friends ${ isSelectedTab("/friends/my_friends") }`}
            to='/friends/my_friends'
            >MY FRIENDS</Link>
          <Link
            className={`friend_requests ${ isSelectedTab("/friends/friend_requests") }`}
            to='/friends/friend_requests'
            >FRIEND REQUESTS</Link>
          <Link
            className={`find_friends ${ isSelectedTab("/friends/find_friends") }`}
            to='/friends/find_friends'
            >FIND FRIENDS</Link>
        </div>
      </div>
    );
  }
}

export default FriendsProfileTabs;
