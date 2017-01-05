import React from 'react';
import { Link } from 'react-router';

class FindFriends extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: "",
      toggleSearchResults: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }

  matches() {
    const matches = [];
    const { potentialFriends } = this.props;
    const lowerCaseSearchVal = this.state.searchVal.toLowerCase();

    if (this.state.searchVal.length === 0) {
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

  handleInput(e) {
    this.setState({ searchVal: e.currentTarget.value });
  }

  handleAddFriend(friend) {
    const friendship = { friend_id: friend.id, status: "pending" };
    this.props.sendFriendRequest(friendship);
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({ toggleSearchResults: true });
  }

  renderMessage(matches) {
    if (matches.length === 0) {
      return (
        <div className="no_results_message">
          <p>No search results.</p>
        </div>
      );
    }
  }

  renderSearchResults() {
    const matches = this.matches();

    if (this.state.toggleSearchResults) {
      return (
        <ul className="find_friends_list group">
          { matches.map((user) => {
            return (
              <li className="find_friends_list_item" key={ user.id }>
                <div className="user_img" style={ { backgroundImage: `url(${ user.image_url })`}}/>
                <div className="find_friends_inner">
                  <span>{ user.first_name + " " + user.last_name }</span>
                  <span>{ user.email }</span>
                  <div onClick={ () => this.handleAddFriend(user) }>Add</div>
                </div>
              </li>
            );
          })}
          { this.renderMessage(matches) };
        </ul>
      )
    }
  }

  render() {
    const { users } = this.props;

    return (
      <div className="find_friends_container">
        <p>FIND MAPMYTROT FRIENDS BY NAME OR EMAIL:</p>
        <form className="find_friends_search_form" onSubmit={ this.handleSearch }>
          <input type="text"
            value={ this.state.searchVal }
            onChange={ (e) => this.handleInput(e) }
          />
          <input type="submit" value='SEARCH'/>
        </form>
        { this.renderSearchResults() }
      </div>
    );
  }
}

export default FindFriends;
