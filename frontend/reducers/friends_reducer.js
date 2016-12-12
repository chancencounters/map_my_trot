import { merge } from 'lodash';

import {
  RECEIVE_ALL_FRIENDS,
  REMOVE_FRIEND,
} from '../actions/friend_actions';

const RoutesReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.friends;
    case REMOVE_FRIEND:
      const keys = Object.keys(state);
      const newFriends = {};

      keys.forEach((key) => {
        if (parseInt(key) !== action.id) {
          Object.assign( newFriends, { [key]: state[key]} );
        }
      });
      return newFriends;
    default:
      return state;
  }
};

export default RoutesReducer;
