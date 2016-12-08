import React from 'react';
import { connect } from 'react-redux';
import CreateRoute from './create_route';
import { postRoute } from '../../actions/route_actions';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  postRoute: (route) => dispatch(postRoute(route)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoute);
