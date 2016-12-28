import React from 'react';
import { Link } from 'react-router';

class ProfileTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { location } = this.props;

    if (location === "/home/activity_feed") {
      $("a.activity_feed").addClass("selected-tab");
    } else if (location === "/home/dashboard") {
      $("a.dashboard").addClass("selected-tab");
    } else {
      $("a.friends").addClass("selected-tab");
    }
  }

  componentWillReceiveProps() {
    const activityFeed = $("a.activity_feed");
    const dashboard = $("a.dashboard");
    const friends = $("a.friends");

    const { location } = this.props;
    if (location === "/home/activity_feed") {
      activityFeed.addClass("selected-tab");
      dashboard.removeClass("selected-tab");
      friends.removeClass("selected-tab");
    } else if (location === "/home/dashboard") {
      activityFeed.removeClass("selected-tab");
      dashboard.addClass("selected-tab");
      friends.removeClass("selected-tab");
    } else {
      activityFeed.removeClass("selected-tab");
      dashboard.removeClass("selected-tab");
      friends.addClass("selected-tab");
    }
  }

  render() {
    return (
      <div className="profile_tabs">
        <Link
          className='activity_feed'
          to='/home/activity_feed'
          >ACTIVITY FEED</Link>
        <Link
          className='dashboard'
          to='/home/dashboard'
          >MY DASHBOARD</Link>
        <Link
          className='my_friends'
          to='/home/my_friends'
          >MY FRIENDS</Link>
        <div className="placeholder"/>
      </div>
    );
  }
}

export default ProfileTabs;
