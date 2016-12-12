import React from 'react';
import { connect } from 'react-redux';
import MyFriends from './my_friends';
import { asArray } from '../../reducers/selectors';
import { clearErrors } from '../../actions/error_actions';
import {
  deleteFriendship, fetchFriends, fetchFriendships
} from '../../actions/friend_actions';

const mapStateToProps = (store) => ({
  currentUser: store.session.currentUser,
  friends: asArray(store.friends),
  friendships: asArray(store.friendships),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFriends: () => dispatch(fetchFriends()),
  fetchFriendships: () => dispatch(fetchFriendships()),
  deleteFriendship: (id) => dispatch(deleteFriendship(id)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyFriends);
