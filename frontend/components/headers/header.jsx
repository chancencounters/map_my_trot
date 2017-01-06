import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.updateProfilePic = this.updateProfilePic.bind(this);
  }

  handleLogout() {
    this.props.clearErrors();
    this.props.logout().then(
      () => this.props.router.push('/login')
    );
  }

  updateProfilePic(e) {
    const formData = new FormData();
    const file = e.currentTarget.files[0];
    formData.append("user[avatar]", file);
    this.props.updateUser(formData, this.props.currentUser.id);
  }

  renderNavLinks() {
    const { currentUser } = this.props;
    if (Boolean(currentUser)) {
      return (
        <nav className="main_header_nav_links">
          <button onClick={ this.handleLogout }>Logout</button>
          <label className="edit_prof_pencil">
            <input type="file" onChange={ this.updateProfilePic }/>
          </label>
          <div className="user_img" style={ { backgroundImage: `url(${ currentUser.image_url })`}}>
          </div>
        </nav>
      );
    } else {
      return(
        <nav className="main_header_nav_links">
          <div className="sign_up_button">
            <Link to="/signup">SIGN UP</Link>
          </div>
          <Link to="/login">LOG IN</Link>
        </nav>
      );
    }
  }

  render () {
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
              <Link to="/friends">FRIENDS</Link>
            </nav>
            { this.renderNavLinks() }
          </nav>
        </div>
      </header>
    );
  }
}


export default withRouter(Header);
