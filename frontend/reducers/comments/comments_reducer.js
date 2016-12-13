import { merge } from 'lodash';

import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_NEW_COMMENT,
} from '../../actions/comment_actions';

import { removeFriend, addFriend } from '../selectors';

const FriendsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_NEW_COMMENT:
      const { comment } = action;
      return Object.assign({}, state, { [comment.id]: comment });
    default:
      return state;
  }
};

export default FriendsReducer;
