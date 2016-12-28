import React from 'react';
import { connect } from 'react-redux';
import { asArray } from "../../../reducers/selectors";
import Dashboard from './dashboard';
import { fetchRoutes } from '../../../actions/route_actions';
import { fetchTrots } from '../../../actions/trot_actions';
import { clearErrors } from '../../../actions/error_actions';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
  trots: asArray(store.trots),
  routes: asArray(store.routes),
});

const mapDispatchToProps = (dispatch) => ({
  fetchRoutes: (routes) => dispatch(fetchRoutes(routes)),
  fetchTrots: (trots) => dispatch(fetchTrots(trots)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
