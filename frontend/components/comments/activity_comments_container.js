import { connect } from 'react-redux';
import { postTrotComment, postRouteComment, deleteComment } from '../../actions/comment_actions';
import { fetchRoute } from '../../actions/route_actions';
import { fetchTrot } from '../../actions/trot_actions';
import { clearErrors } from '../../actions/error_actions';
import ActivityComments from './activity_comments';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  routeDetail: state.routeDetail,
  trotDetail: state.trotDetail,
});

const mapDispatchToProps = dispatch => ({
  postRouteComment: (comment, routeId) => dispatch(postRouteComment(comment, routeId)),
  postTrotComment: (comment, routeId) => dispatch(postTrotComment(comment, trotId)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  fetchRoute: (id) => dispatch(fetchRoute(id)),
  fetchTrot: (id) => dispatch(fetchTrot(id)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityComments);
