import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const props = {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    guestLogin: () => dispatch(login({
      email: "demo_account@admin.com",
      password: "password"
    }))
  };
  
  if (ownProps.location.pathname === '/login') {
    return Object.assign(props, { formType: 'login' });
  } else {
    return Object.assign(props, { formType: 'signup' });
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
