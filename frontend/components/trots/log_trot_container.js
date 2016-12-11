import React from 'react';
import { connect } from 'react-redux';
import LogTrot from './log_trot';
import { fetchRoutes } from '../../actions/route_actions';
import { postTrot } from '../../actions/trot_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (store) => {
  return({
    currentUser: store.session.currentUser,
    routes: store.routes,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchRoutes: () => dispatch(fetchRoutes()),
  postTrot: (trot) => dispatch(postTrot(trot)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogTrot);
