import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/login') {
    return {
      formType: 'login',
      processForm: (user) => dispatch(login(user))
    };
  } else {
    return {
      formType: 'signup',
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
