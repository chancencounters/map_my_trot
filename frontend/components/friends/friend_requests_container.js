import React from 'react';
import { connect } from 'react-redux';
import FriendRequests from './friend_requests';
import { friendRequestsArray } from '../../reducers/selectors';
import { clearErrors } from '../../actions/error_actions';
import {
  deleteFriendship, fetchFriends, fetchFriendships, approveFriendship
} from '../../actions/friend_actions';

const mapStateToProps = (store) => {
  return (
  {
  friendRequests: friendRequestsArray(
    store.friendships, store.session.currentUser
  ),
});};

const mapDispatchToProps = (dispatch) => ({
  fetchFriendships: () => dispatch(fetchFriendships()),
  approveFriendship: (id) => dispatch(approveFriendship(id)),
  deleteFriendship: (id) => dispatch(deleteFriendship(id)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequests);
