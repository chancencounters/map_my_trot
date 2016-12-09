import { merge } from 'lodash';

import {
  RECEIVE_NEW_ROUTE,
  RECEIVE_ALL_ROUTES,
  REMOVE_ROUTE
} from '../actions/route_actions';

const RoutesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_ROUTES:
      return action.routes;
    case RECEIVE_NEW_ROUTE:
      return merge({}, state, action.route);
    case REMOVE_ROUTE:
      const keys = Object.keys(state);
      const newRoutes = {};
      keys.forEach((key) => {
        if (key !== action.routeId) {
          newRoutes.assign(state[key]);
        }
      });
      
      return newRoutes;
    default:
      return state;
  }
};

export default RoutesReducer;
