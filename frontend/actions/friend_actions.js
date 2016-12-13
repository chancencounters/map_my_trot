import * as Util from '../util/friend_api_util';
import { receiveFriendErrors } from './error_actions';

export const RECEIVE_ALL_POTENTIAL_FRIENDS = "RECEIVE_ALL_POTENTIAL_FRIENDS";
export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_ALL_FRIENDSHIPS = "RECEIVE_ALL_FRIENDSHIPS";
export const RECEIVE_NEW_FRIEND = "RECEIVE_NEW_FRIEND";
export const RECEIVE_NEW_FRIENDSHIP = "RECEIVE_NEW_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

export const receiveAllFriends = (friends) => {
    return ({
    type: RECEIVE_ALL_FRIENDS,
    friends
  });
};

export const receiveAllPotentialFriends = (users) => ({
  type: RECEIVE_ALL_POTENTIAL_FRIENDS,
  users
});

export const receiveNewFriendship = (friendship) => ({
  type: RECEIVE_NEW_FRIENDSHIP,
  friendship
});


export const receiveAllFriendships = (friendships) => ({
  type: RECEIVE_ALL_FRIENDSHIPS,
  friendships
});

export const receiveNewFriend = (friendAndFriendship) => ({
  type: RECEIVE_NEW_FRIEND,
  friendAndFriendship
});

export const removeFriendship = (friendship) => ({
  type: REMOVE_FRIENDSHIP,
  friendship
});


export function fetchPotentialFriends() {
  return (dispatch) => {
    return Util.fetchPotentialFriends().then(
      (potentialFriends) => dispatch(receiveAllPotentialFriends(potentialFriends)),
      (errors) => dispatch(receiveFriendErrors(errors.responseJSON))
    );
  };
}

export function fetchFriends() {
  return (dispatch) => {
    return Util.fetchFriends().then(
      (friends) => dispatch(receiveAllFriends(friends)),
      (errors) => dispatch(receiveFriendErrors(errors.responseJSON))
    );
  };
}

export function fetchFriendships() {
  return (dispatch) => {
    return Util.fetchFriendships().then(
      (friendships) => dispatch(receiveAllFriendships(friendships)),
      (errors) => dispatch(receiveFriendErrors(errors.responseJSON))
    );
  };
}

export function sendFriendRequest(friendship) {
  return (dispatch) => {
    return Util.createFriendship(friendship).then(
      (newFriendship) => dispatch(receiveNewFriendship(newFriendship)),
      (errors) => dispatch(receiveFriendErrors(errors.responseJSON))
    );
  };
}

export function deleteFriendship(id) {
  return (dispatch) => {
    return Util.deleteFriendship(id).then(
      (friendship) => dispatch(removeFriendship(friendship))),
      (errors) => dispatch(receiveFriendErrors(errors.responseJSON))
    ;
  };
}

export function approveFriendship(id) {
  return (dispatch) => {
    return Util.editFriendship(id).then(
      (friendAndFriendship) => dispatch(receiveNewFriend(friendAndFriendship)),
      (errors) => dispatch(receiveFriendErrors(errors.responseJSON))
    );
  };
}
