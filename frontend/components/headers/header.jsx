import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser) {
      this.props.router.push("/login");
    }
  }

  handleLogout() {
    this.props.clearErrors();
    this.props.logout();
  }

  render () {
    const { currentUser } = this.props;
    
    return (
      <header className="main_header">
        <div className="main_header_inner">
          <nav className="main_header_nav">
            <nav className="nav_logo">
              <div></div>
              <Link to="/home">mapmytrot</Link>
            </nav>
            <nav className="nav_menu">
              <Link to="/trots">TROTS</Link>
              <Link to="/routes">ROUTES</Link>
            </nav>
            <nav className="main_header_nav_links">
              <button onClick={ this.handleLogout }>LOGOUT</button>
              <img src={ currentUser.image_url}/>
            </nav>
          </nav>
        </div>
      </header>
    );
  }
}


export default withRouter(Header);
