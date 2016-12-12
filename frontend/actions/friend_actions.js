import * as Util from '../util/friend_api_util';

export const RECEIVE_ALL_POTENTIAL_FRIENDS = "RECEIVE_ALL_POTENTIAL_FRIENDS";
export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_ALL_FRIENDSHIPS = "RECEIVE_ALL_FRIENDSHIPS";
export const RECEIVE_NEW_FRIEND = "RECEIVE_NEW_FRIEND";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

export const receiveAllFriends = (friends) => {
    return ({
    type: RECEIVE_ALL_FRIENDS,
    friends
  });
};

export const receiveAllPotentialFriends = (potentialFriends) => ({
  type: RECEIVE_ALL_POTENTIAL_FRIENDS,
  potentialFriends
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
      (potentialFriends) => dispatch(receiveAllPotentialFriends(potentialFriends))
    );
  };
}

export function fetchFriends() {
  return (dispatch) => {
    return Util.fetchFriends().then(
      (friends) => dispatch(receiveAllFriends(friends))
    );
  };
}

export function postFriendship(id) {
  return (dispatch) => {
    return Util.postFriendship(id).then(
      (friendship) => dispatch(postFriendship(friendship))
    );
  };
}

export function fetchFriendships() {
  return (dispatch) => {
    return Util.fetchFriendships().then(
      (friendships) => dispatch(receiveAllFriendships(friendships))
    );
  };
}

export function deleteFriendship(id) {
  return (dispatch) => {
    return Util.deleteFriendship(id).then(
      (friendship) => dispatch(removeFriendship(friendship)))
    ;
  };
}

export function approveFriendship(id) {
  return (dispatch) => {
    return Util.postFriendship(id).then(
      (friendAndFriendship) => dispatch(receiveNewFriend(friendAndFriendship))
    );
  };
}
