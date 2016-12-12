import React from 'react';
import { Link } from 'react-router';
import { findFriendshipId } from '../../reducers/selectors';

class MyFriends extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends().then(() => this.props.fetchFriendships());
  }

  handleClick(friendId) {
    const { friendships, currentUser } = this.props;
    const friendshipId = findFriendshipId(
      friendships, friendId, currentUser.id
    );

    this.props.deleteFriendship(friendshipId);
  }

  render() {
    const { friends } = this.props;
    return (
      <div className="my_friends_container">
        <ul className="my_friends_list">
          { friends.map((friend) => {
            return (
              <li className="my_friends_list_item" key={ friend.id }>
                <img src={ friend.image_url}/>
                <div className="my_friends_inner">
                  <span>{ friend.name }</span>
                  <div
                    onClick={
                      () => this.handleClick(friend.id)
                    }
                  >Unfriend</div>
                </div>
              </li>
            );
          })
          }
        </ul>
      </div>
    );
  }
}

export default MyFriends;
