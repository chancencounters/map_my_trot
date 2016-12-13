import { merge } from 'lodash';
import { removePotentialFriend, removeFriend, addFriend } from '../selectors';
import {
  RECEIVE_ALL_POTENTIAL_FRIENDS,
  RECEIVE_NEW_FRIENDSHIP,
} from '../../actions/friend_actions';

const PotentailFriendsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POTENTIAL_FRIENDS:
      return action.users;
    case RECEIVE_NEW_FRIENDSHIP:
      return removePotentialFriend(state, action);
    default:
      return state;
  }
};

export default PotentailFriendsReducer;
