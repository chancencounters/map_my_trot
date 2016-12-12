import { merge } from 'lodash';

import {
  RECEIVE_ALL_FRIENDSHIPS,
  RECEIVE_NEW_FRIEND,
  REMOVE_FRIENDSHIP,
} from '../actions/friend_actions';

const FriendshipsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_FRIENDSHIPS:
      return action.friendships;
    case RECEIVE_NEW_FRIEND:
      const { friendship } = action.friendAndFriendship;
      return Object.assign({}, state, { [friendship.id]: friendship } );
    case REMOVE_FRIENDSHIP:
      const keys = Object.keys(state);
      const newFriendships = {};

      keys.forEach((key) => {
        if (parseInt(key) !== action.friendship.id) {
          Object.assign( newFriendships, { [key]: state[key]} );
        }
      });

      return newFriendships;
    default:
      return state;
  }
};

export default FriendshipsReducer;
