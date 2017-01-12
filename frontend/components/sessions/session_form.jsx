import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.renderLogInForm = this.renderLogInForm.bind(this);
    this.renderSignUpForm = this.renderSignUpForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/home'));
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.guestLogin().then(() => this.props.router.push('/home'));
  }

  renderSignUpForm() {
    const { errors } = this.props;

    if (this.props.formType === 'signup') {
      return (
        <div className="session_form_body" style={ { backgroundImage: `url(https://s3.amazonaws.com/mapmytrot-prod/bg_image_s.jpg)`} }>
          <form onSubmit={ this.handleSubmit }>
            <input type="text"
              value={ this.state.first_name }
              placeholder="First Name"
              onChange={ this.update("first_name") }/>
            { (Boolean(errors.first_name)) ? <div className="error_message">First name is required</div> : "" }
            <input type="text"
              value={ this.state.last_name }
              placeholder="Last Name"
              onChange={ this.update("last_name") }/>
            { (Boolean(errors.last_name)) ? <div className="error_message">Last name is required</div> : "" }
            <input type="text"
              value={ this.state.email }
              placeholder="Email"
              onChange={ this.update("email") }/>
            { (Boolean(errors.email)) ? <div className="error_message">Email is required</div> : "" }
            <input type="password"
              value={ this.state.password }
              placeholder="Password"
              onChange={ this.update("password") }/>
            { (Boolean(errors.password)) ? <div className="error_message">Password { errors.password[0] }</div> : "" }
            <input type="submit"
              onClick={ this.handleSubmit }
              value="JOIN NOW"/>
            <button onClick={ this.handleGuestLogin }>GUEST</button>
            <Link to="/login" onClick={ this.props.clearErrors }>
              Already have an account? Login
            </Link>
          </form>
        </div>
      );
    }
  }

  renderLogInForm() {
    const { errors } = this.props;

    if (this.props.formType === 'login') {
      return (
        <div className="session_form_body" style={ { backgroundImage: `url(https://s3.amazonaws.com/mapmytrot-prod/bg_image_s.jpg)`} }>
          <form onSubmit={ this.handleSubmit }>
            <input type="text"
              value={ this.state.email }
              placeholder="Email"
              onChange={ this.update("email") }/>
            <input type="password"
              value={ this.state.password }
              placeholder="Password"
              onChange={ this.update("password") }/>
            { (Boolean(errors.length)) ? <div className="error_message">{ errors[0] }</div> : "" }
            <input type="submit"
              onClick={ this.handleSubmit }
              value="LOG IN"/>
            <button onClick={ this.handleGuestLogin }>GUEST</button>
            <Link to="/signup" onClick={ this.props.clearErrors }>
              New to MapMyTrot? Join Now
            </Link>
          </form>
        </div>
      );
    }
  }

  render () {
    return (
      <div className="session_form_container">
        <header className="session_form_header">
          <div className="header_logo">
            <div></div>
            <h1>mapmytrot</h1>
          </div>
        </header>
        { this.renderLogInForm() }
        { this.renderSignUpForm() }
      </div>
    );
  }
}

export default withRouter(SessionForm);
