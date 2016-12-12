import React from 'react';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
    this.props.fetchFriendRequests();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Friends;
