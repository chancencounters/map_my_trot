import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/login') {
    return {
      formType: 'login',
      processForm: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors()),
      guestLogin: () => dispatch(login({
        email: "demo_account@admin.com",
        password: "password"
      }))
    };
  } else {
    return {
      formType: 'signup',
      processForm: (user) => dispatch(signup(user)),
      clearErrors: () => dispatch(clearErrors()),
      guestLogin: () => dispatch(login({
        email: "demo_account@admin.com",
        password: "password"
      }))
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
