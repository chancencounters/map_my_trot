import { merge } from 'lodash';

import {
  RECEIVE_NEW_ROUTE,
  RECEIVE_ALL_ROUTES
} from '../actions/route_actions';

const RoutesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ROUTES:
      return action.routes;
    case RECEIVE_NEW_ROUTE:
      return merge({}, state, action.route);
    default:
      return state;
  }
};

export default RoutesReducer;
