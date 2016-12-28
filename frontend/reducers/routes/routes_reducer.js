import { merge } from 'lodash';
import { RECEIVE_NEW_COMMENT } from '../../actions/trot_actions';
import {
  RECEIVE_NEW_ROUTE,
  RECEIVE_ALL_ROUTES,
  REMOVE_ROUTE,
} from '../../actions/route_actions';

const RoutesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_ROUTES:
      return action.routes;
    case REMOVE_ROUTE:
      const keys = Object.keys(state);
      const newRoutes = {};

      keys.forEach((key) => {
        if (parseInt(key) !== action.id) {
          Object.assign( newRoutes, { [key]: state[key]} );
        }
      });
      return newRoutes;
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

export default RoutesReducer;
