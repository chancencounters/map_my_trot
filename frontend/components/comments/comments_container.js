import { connect } from 'react-redux';
import { postComment, deleteComment } from '../../actions/comment_actions';
import { clearErrors } from '../../actions/error_actions';
import Comments from './comments';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  postComment: (comment, routeId) => dispatch(postComment(comment, routeId)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
