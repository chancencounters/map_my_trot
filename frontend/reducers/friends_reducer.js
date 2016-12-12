import { merge } from 'lodash';

import {
  RECEIVE_ALL_FRIENDS,
  REMOVE_FRIENDSHIP,
} from '../actions/friend_actions';

const RoutesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.friends;
    case REMOVE_FRIENDSHIP:
      const keys = Object.keys(state);
      const newFriends = {};
      debugger
      keys.forEach((key) => {
        if (parseInt(key) !== action.friendshipId) {
          Object.assign( newFriends, { [key]: state[key]} );
        }
      });
      debugger
      return newFriends;
    default:
      return state;
  }
};

export default RoutesReducer;
