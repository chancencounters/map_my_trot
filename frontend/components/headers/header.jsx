import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.renderNavLinks = this.renderNavLinks.bind(this);
  }

  renderNavLinks() {
    const { currentUser, logout } = this.props;

    if (Boolean(currentUser)) {
      return (
        <nav className="main_header_nav_links">
          <button onClick={ logout }>Logout</button>
          <img src="/assets/default_prof_pic.jpg"/>
        </nav>
      );
    } else {
      return(
        <nav className="main_header_nav_links">
          <div className="sign_up_button">
            <Link to="/signup">Sign Up</Link>
          </div>
          <Link to="/login">Log In</Link>
        </nav>
      );
    }
  }

  render () {
    return (
      <header className="main_header">
        <div className="main_header_inner group">
          <nav className="main_header_nav">
            <nav className="nav_logo">
              <img src="/assets/horse_logo.jpg"/>
              <h1>mapmytrot</h1>
            </nav>
            <nav className="nav_menu">
              <Link to="/trots">Trots</Link>
              <Link to="/routes">Routes</Link>
            </nav>
          </nav>
          { this.renderNavLinks() }
        </div>
      </header>
    );
  }
}


export default Header;
