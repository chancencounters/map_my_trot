import React from 'react';
import { connect } from 'react-redux';
import FindFriends from './find_friends';
import { asArray } from '../../reducers/selectors';
import { clearErrors } from '../../actions/error_actions';
import {
  deleteFriendship, sendFriendRequest, fetchPotentialFriends
} from '../../actions/friend_actions';

const mapStateToProps = (store) => ({
  potentialFriends: asArray(store.potentialFriends)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPotentialFriends: (search) => dispatch(fetchPotentialFriends(search)),
  sendFriendRequest: (id) => dispatch(sendFriendRequest(id)),
  deleteFriendship: (id) => dispatch(deleteFriendship(id)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindFriends);
