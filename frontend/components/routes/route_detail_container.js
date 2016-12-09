import React from 'react';
import { connect } from 'react-redux';
import RouteDetail from './route_detail';
import { fetchRoute, deleteRoute } from '../../actions/route_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  route: state.routeDetail,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRoute: (id) => dispatch(fetchRoute(id)),
  deleteRoute: (id) => dispatch(deleteRoute(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteDetail);
