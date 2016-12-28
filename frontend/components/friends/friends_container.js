import React from 'react';
import { connect } from 'react-redux';
import Friends from './friends';
import {
  fetchFriends, fetchFriendships, fetchPotentialFriends
} from '../../actions/friend_actions';


const mapDispatchToProps = (dispatch) => ({
  fetchFriends: () => dispatch(fetchFriends()),
  fetchFriendships: () => dispatch(fetchFriendships()),
  fetchPotentialFriends: () => dispatch(fetchPotentialFriends()),
});

export default connect(
  null,
  mapDispatchToProps
)(Friends);
