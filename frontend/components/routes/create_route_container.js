import React from 'react';
import { connect } from 'react-redux';
import CreateRoute from './create_route';
import { postRoute, fetchRoutes } from '../../actions/route_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
  routeId: store.session.routeDetail.id,
});

const mapDispatchToProps = (dispatch) => ({
  postRoute: (route) => dispatch(postRoute(route)),
  fetchRoutes: () => dispatch(fetchRoutes()),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoute);
