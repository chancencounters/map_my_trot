import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()).then(() => (window.currentUser = null)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
