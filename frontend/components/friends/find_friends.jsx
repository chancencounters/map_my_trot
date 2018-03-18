import React from 'react';
import { Link } from 'react-router';

class FindFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      toggleSearchResults: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }

  handleInput(e) {
    this.setState({ search: e.currentTarget.value });
  }

  handleAddFriend(friend) {
    const friendship = { friend_id: friend.id, status: "pending" };
    this.props.sendFriendRequest(friendship);
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.fetchPotentialFriends(this.state.search)
      .then(setTimeout(() => this.setState({ toggleSearchResults: true }), 1000))
  }

  renderMessage(potentialFriends) {
    if (potentialFriends.length === 0 && this.state.toggleSearchResults) {
      return (
        <div className="no_results_message">
          <p>No search results.</p>
        </div>
      );
    }
  }

  renderSearchResults() {
    const { potentialFriends } = this.props;

    return (
      <ul className="find_friends_list group">
        { potentialFriends.map((user) => {
          return (
            <li className="find_friends_list_item" key={ user.id }>
              <div
                className="user_img"
                style={ { backgroundImage: `url(${ user.image_url })`}}/>
              <div className="find_friends_inner">
                <span>{ user.first_name + " " + user.last_name }</span>
                <span>{ user.email }</span>
                <div onClick={ () => this.handleAddFriend(user) }>Add</div>
              </div>
            </li>
          );
        })}
        { this.renderMessage(potentialFriends) };
      </ul>
    )
  }

  render() {
    const { users } = this.props;

    return (
      <div className="find_friends_container">
        <p>FIND MAPMYTROT FRIENDS BY NAME OR EMAIL:</p>
        <form className="find_friends_search_form" onSubmit={ this.handleSearch }>
          <input type="text"
            value={ this.state.search }
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
