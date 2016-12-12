import { merge } from 'lodash';

import {
  RECEIVE_ALL_FRIENDS,
  REMOVE_FRIENDSHIP,
  RECEIVE_NEW_FRIEND
} from '../actions/friend_actions';

import { removeFriend, addFriend } from './selectors';

const FriendsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.friends;
    case RECEIVE_NEW_FRIEND:
      const { friend } = action.friendAndFriendship;
      return Object.assign({}, state, { [friend.id]: friend });
    case REMOVE_FRIENDSHIP:
      return removeFriend(state, action);
    default:
      return state;
  }
};

export default FriendsReducer;
