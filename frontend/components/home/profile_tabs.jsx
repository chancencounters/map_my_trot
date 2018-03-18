import React from 'react';
import { Link } from 'react-router';

class ProfileTabs extends React.Component {
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
      <div className="profile_tabs">
        <Link
          className={`activity_feed ${ isSelectedTab("/home/activity_feed") }`}
          to='/home/activity_feed'
          >ACTIVITY FEED</Link>
        <Link
          className={`dashboard ${ isSelectedTab("/home/dashboard") }`}
          to='/home/dashboard'
          >MY DASHBOARD</Link>
        <Link
          className={`my_friends ${ isSelectedTab("/home/my_friends") }`}
          to='/home/my_friends'
          >MY FRIENDS</Link>
        <div className="placeholder"/>
      </div>
    );
  }
}

export default ProfileTabs;
