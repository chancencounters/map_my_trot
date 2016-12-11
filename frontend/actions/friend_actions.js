import * as Util from '../util/friend_api_util';

export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

export const receiveAllFriends = (friends) => ({
  type: RECEIVE_ALL_FRIENDS,
  friends
});

export const removeFriend = (id) => ({
  type: REMOVE_FRIEND,
  id
});

export function fetchFriends() {
  return (dispatch) => {
    return Util.fetchFriends().then(
      (friends) => dispatch(receiveAllFriends(friends))
    );
  };
}
