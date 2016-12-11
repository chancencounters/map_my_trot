import React from 'react';
import { connect } from 'react-redux';
import Friends from './friends';
import { postRoute } from '../../../actions/route_actions';
import { clearErrors } from '../../../actions/error_actions';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  postRoute: (route) => dispatch(postRoute(route)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
