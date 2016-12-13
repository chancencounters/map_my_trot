import React from 'react';
import { Link } from 'react-router';

class FriendRequests extends React.Component {
  constructor(props) {
    super(props);

    this.renderMessage = this.renderMessage.bind(this);
  }

  handleApproval(id) {
    this.props.approveFriendship(id);
  }

  handleRejection(id) {
    this.props.deleteFriendship(id);
  }

  renderMessage() {
    if (this.props.friendRequests.length === 0) {
      return (
        <div className="no_friend_requests_message">
          <p>You currently have no friend requests.</p>
        </div>
      );
    }
  }

  render() {
    const { friendRequests } = this.props;
    return (
      <div className="friend_requests_container">
        <ul className="friend_requests_list">
          { friendRequests.map((friendRequest, idx) => {
            return (
              <li className="friend_requests_list_item" key={ idx }>
                <img src={ friendRequest.friend_image_url}/>
                <div className="friend_requests_inner">
                  <span>{ friendRequest.friend_name }</span>
                  <div onClick={ () => this.handleApproval(friendRequest.id) }>Approve</div>
                  <div onClick={ () => this.handleRejection(friendRequest.id) }>Reject</div>
                </div>
              </li>
            );
          })
          }
        </ul>
        { this.renderMessage() };
      </div>
    );
  }
}

export default FriendRequests;
