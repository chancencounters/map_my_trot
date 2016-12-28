import { merge } from 'lodash';
import { RECEIVE_NEW_COMMENT } from '../../actions/trot_actions';
import {
  RECEIVE_NEW_TROT,
  RECEIVE_ALL_TROTS,
  REMOVE_TROT
} from '../../actions/trot_actions';


const TrotsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_TROTS:
      return action.trots;
    case REMOVE_TROT:
      const keys = Object.keys(state);
      const newTrots = {};

      keys.forEach((key) => {
        if (parseInt(key) !== action.id) {
          Object.assign( newTrots, { [key]: state[key]} );
        }
      });
      return newTrots;
    case RECEIVE_NEW_COMMENT:
      const { comment } = action;
      const { commentable_id } = comment;
      const comments = Object.assign(
        {}, state[commentable_id].comments, { [comment.id]: comment }
      );

      return Object.assign(
        {}, state[commentable_id], { comments: comments }
      );
    default:
      return state;
  }
};

export default TrotsReducer;
