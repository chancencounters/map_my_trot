import React from 'react';
import { Link } from 'react-router';

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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/'));
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  render () {
    const { formType, errors } = this.props;

    let fName, lName, link, button;
    if (formType === 'login') {
      button = "LOG IN";
      link = <Link to="/signup">New to MapMyTrot? Join Now</Link>;
    } else {
      fName = <input type="text"
        value={ this.state.first_name }
        placeholder="First Name"
        onChange={ this.update("first_name") }/>;
      lName = <input type="text"
        value={ this.state.last_name }
        placeholder="Last Name"
        onChange={ this.update("last_name") }/>;
      link = <Link to="/login">Already have an account? Login</Link>;
      button = "JOIN NOW";
    }

    return (
      <div className="session_form_container">
        <header className="session_form_header">
          <span className="horse_logo"/>
          <h1>mapmytrot</h1>
        </header>

        <div className="session_form_body">
          <img src="../assets/images/horse.png"/>
          <form onSubmit={ this.handleSubmit }>
            { this.renderErrors() }
            { fName }
            { lName }
            <input type="text"
  						value={ this.state.email }
              placeholder="Email"
  						onChange={ this.update("email") }/>

            <input type="password"
							value={ this.state.password }
              placeholder="Password"
							onChange={ this.update("password") }/>

            <input type="submit" value={ button }/>
            { link }
          </form>
        </div>

      </div>
    );
  }
}

export default SessionForm;
