import React from 'react';
import { Link } from 'react-router';

class FindFriends extends React.Component {
  constructor(props) {
    super(props);

    this.searchVal = "";
    this.state = {
      toggleSearchResults: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  matches() {
    const matches = [];
    const { potentialFriends } = this.props;
    const lowerCaseSearchVal = this.searchVal.toLowerCase();

    if (this.searchVal.length === 0) {
      return potentialFriends;
    }

    this.props.potentialFriends.forEach(potentialFriend => {
      const { first_name, last_name, email } = potentialFriend;

      if (first_name.toLowerCase().includes(lowerCaseSearchVal) ||
        last_name.toLowerCase().includes(lowerCaseSearchVal) ||
        email.toLowerCase().includes(lowerCaseSearchVal)
      ) {
        matches.push(potentialFriend);
      }
    });

    return matches;
  }

  renderSearchResults() {
    if (this.state.toggleSearchResults) {
      return (
        <ul className="find_friends_list">
          { this.matches().map((user) => {
            return (
              <li className="find_friends_list_item" key={ user.id }>
                <img src={ user.image_url}/>
                <div className="find_friends_inner">
                  <span>{ user.first_name + " " + user.last_name }</span>
                  <span>{ user.email }</span>
                  <div onClick={ () => this.handleAddFriend(user) }>Add</div>
                </div>
              </li>
            );
          })
        }
      </ul>
    );
    }
  }

  handleInput(e) {
    this.searchVal = e.currentTarget.value;
    this.forceUpdate();
  }

  handleAddFriend(friend) {
    const friendship = { friend_id: friend.id, status: "pending" };
    this.props.sendFriendRequest(friendship);
  }

  handleSearch() {
    this.setState({ toggleSearchResults: true });
  }

  render() {
    const { users } = this.props;

    return (
      <div className="find_friends_container">
        <p>FIND MAPMYTROT FRIENDS BY NAME OR EMAIL:</p>
        <form className="find_friends_search_form">
          <input type="text"
            value={ this.searchVal }
            onChange={ (e) => this.handleInput(e) }
          />
          <input type="submit"
            value='SEARCH'
            onClick={ this.handleSearch }
          />
        </form>
        { this.renderSearchResults() }
      </div>
    );
  }
}

export default FindFriends;
