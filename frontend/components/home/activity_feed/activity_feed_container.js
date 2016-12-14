import React from 'react';
import { connect } from 'react-redux';
import { asArray } from "../../../reducers/selectors";
import ActivityFeed from './dashboard';
import { fetchActivityFeed } from '../../../actions/route_actions';
import { clearErrors } from '../../../actions/error_actions';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: (activities) => dispatch(fetchActivityFeed(activities)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityFeed);
