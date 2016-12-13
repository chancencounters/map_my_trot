import { connect } from 'react-redux';
import { postComment } from '../../actions/comment_actions';
import { clearErrors } from '../../actions/error_actions';
import Comments from './comments';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  postComment: (comment) => dispatch(postComment(comment)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
