import React from 'react';
import { connect } from 'react-redux';
import CreateRoute from './create_route';
import { postRoute } from '../../actions/route_actions';
import { postTrot } from '../../actions/trot_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (store) => {
  return({
    currentUser: store.session.currentUser,
    route_id: store.routeDetail.id,
  });
};

const mapDispatchToProps = (dispatch) => ({
  postRoute: (route) => dispatch(postRoute(route)),
  postTrot: (trot) => dispatch(postTrot(trot)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRoute);
