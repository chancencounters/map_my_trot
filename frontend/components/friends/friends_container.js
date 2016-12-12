import React from 'react';
import { connect } from 'react-redux';
import Friends from './friends';
import {
  removeFriendship,
  fetchFriends
} from '../../actions/friend_actions';

import {
  fetchFriendRequests
} from '../../actions/friend_request_actions';

import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
  friends: store.friends,
  friendRequests: store.friendRequests,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFriends: () => dispatch(fetchFriends()),
  fetchFriendRequests: () => dispatch(fetchFriendRequests()),
  removeFriendship: (id) => dispatch(removeFriendship(id)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
