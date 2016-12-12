import * as Util from '../util/friend_api_util';

export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_ALL_FRIENDSHIPS = "RECEIVE_ALL_FRIENDSHIPS";
export const RECEIVE_NEW_FRIENDSHIP = "RECEIVE_NEW_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

export const receiveAllFriends = (friends) => ({
  type: RECEIVE_ALL_FRIENDS,
  friends
});

export const receiveAllFriendships = (friendships) => ({
  type: RECEIVE_ALL_FRIENDSHIPS,
  friendships
});

export const receiveNewFriendships = (friendship) => ({
  type: RECEIVE_NEW_FRIENDSHIP,
  friendship
});

export const removeFriendship = (id) => ({
  type: REMOVE_FRIENDSHIP,
  id
});

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
      (friendshipId) => dispatch(removeFriendship(friendshipId)))
    ;
  };
}
