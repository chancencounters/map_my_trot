import React from 'react';
import { Link } from 'react-router';

class FindFriends extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVal: "",
      toggleSearch: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
  }

  matches() {
    const matches = [];
    const { searchVal } = this.state;
    const { potentialFriends } = this.props;

    if (searchVal.length === 0) {
      return potentialFriends;
    }

    potentialFriends.forEach(potentialFriend => {
      let nameSub = potentialFriend.name.slice(0, searchVal.length);
      let emailSub = potentialFriend.email.slice(0, searchVal.length);

      if (
        nameSub.toLowerCase() === searchVal.toLowerCase() ||
        emailSub.toLowerCase() === searchVal.toLowerCase()
      ) {
        matches.push(potentialFriend);
      }
    });

    return matches;
  }

  handleInput(e) {
    this.setState({ searchVal: e.currentTarget.value });
  }

  handleAddFriend(id) {
    this.props.sendFriendRequest(id);
  }

  handleSearch() {
    this.setState({ toggleSearch: !this.state.toggleSearch });
  }

  render() {
    const { users } = this.props;
    return (
      <div className="find_friends_container">
        <form className="find_friends_search_form">
          <p>FIND MAPMYTROT FRIENDS BY NAME, NAME, OR EMAIL:</p>
          <input type="text"
            value={ this.state.search }
            onChange={ (e) => this.handleInput(e) }
          />
          <input type="submit"
            value='SEARCH'
            onClick={ this.handleSearch }
          />
        </form>
        <ul className="find_friends_list">
          { this.matches().map((user) => {
            return (
              <li className="find_friends_list_item" key={ user.id }>
                <img src={ user.image_url}/>
                <div className="find_friends_inner">
                  <span>{ user.name }</span>
                  <span>{ user.email }</span>
                  <div onClick={ () => this.handleApproval(user.id) }>Add</div>
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

export default FindFriends;
