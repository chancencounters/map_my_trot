import * as Util from '../util/friend_request_api_util';

export const RECEIVE_ALL_FRIEND_REQUESTS = "RECEIVE_ALL_FRIEND_REQUESTS";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

export const receiveAllFriendRequests = (friendRequests) => ({
  type: RECEIVE_ALL_FRIEND_REQUESTS,
  friendRequests
});

export const removeFriendship = (id) => ({
  type: REMOVE_FRIENDSHIP,
  id
});

export function fetchFriendRequests() {
  return (dispatch) => {
    return Util.fetchFriendRequests().then(
      (friendRequests) => dispatch(receiveAllFriendRequests(friendRequests))
    );
  };
}
