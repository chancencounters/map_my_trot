import React from 'react';
import { Link } from 'react-router';

class MyFriends extends React.Component {
  constructor(props) {
    super(props);
    this.renderFriends = this.renderFriends.bind(this);
  }

  renderFriends() {
    return (
      <ul>
        { }
      </ul>
    );
  }

  render() {
    return (
      <div className="my_friends_container">

      </div>
    );
  }
}

export default MyFriends;
