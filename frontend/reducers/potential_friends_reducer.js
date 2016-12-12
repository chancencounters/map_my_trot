import { merge } from 'lodash';

import {
  RECEIVE_ALL_POTENTIAL_FRIENDS,
} from '../actions/friend_actions';

import { removeFriend, addFriend } from './selectors';

const PotentailFriendsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_ALL_POTENTIAL_FRIENDS:
      return action.potentialFriends;
    default:
      return state;
  }
};

export default PotentailFriendsReducer;
