import { connect } from 'react-redux';
import { postRouteComment, deleteComment } from '../../actions/comment_actions';
import { clearErrors } from '../../actions/error_actions';
import Comments from './comments';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  postRouteComment: (comment, routeId) => dispatch(postRouteComment(comment, routeId)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
