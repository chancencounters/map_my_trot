import { merge } from 'lodash';

import {
  RECEIVE_ALL_FRIEND_REQUESTS,
  REMOVE_FRIENDSHIP,
} from '../actions/friend_request_actions';

const FriendRequestsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_FRIEND_REQUESTS:
      return action.friendRequests;
    case REMOVE_FRIENDSHIP:
      const keys = Object.keys(state);
      const newFriendRequests = {};

      keys.forEach((key) => {
        if (parseInt(key) !== action.id) {
          Object.assign( newFriendRequests, { [key]: state[key]} );
        }
      });
      return newFriendRequests;
    default:
      return state;
  }
};

export default FriendRequestsReducer;
