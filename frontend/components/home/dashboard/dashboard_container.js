import React from 'react';
import { connect } from 'react-redux';
import { asArray } from "../../../reducers/selectors";
import Dashboard from './dashboard';
import { postRoute } from '../../../actions/route_actions';
import { clearErrors } from '../../../actions/error_actions';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
  trots: asArray(store.trots),
});

const mapDispatchToProps = (dispatch) => ({
  postRoute: (route) => dispatch(postRoute(route)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
