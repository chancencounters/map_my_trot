import React from 'react';
import { connect } from 'react-redux';
import LogTrot from './log_trot';
import { fetchRoutes } from '../../actions/route_actions';
import { postTrot } from '../../actions/trot_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (store) => ({
    currentUser: store.session.currentUser,
    routeDetail: store.routeDetail,
    routesList: store.routes,
    errors: store.errors.trot,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRoutes: () => dispatch(fetchRoutes()),
  postTrot: (trot) => dispatch(postTrot(trot)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogTrot);
