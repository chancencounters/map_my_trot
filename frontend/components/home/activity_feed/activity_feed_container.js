import React from 'react';
import { connect } from 'react-redux';
import { asArray } from "../../../reducers/selectors";
import ActivityFeed from './activity_feed';
import { fetchActivities } from '../../../actions/activity_actions';
import { clearErrors } from '../../../actions/error_actions';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
  activities: asArray(store.activities),
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: (activities) => dispatch(fetchActivities(activities)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityFeed);
