import { RECEIVE_ROUTE,
  RECEIVE_NEW_ROUTE,
} from '../../actions/route_actions';

import { RECEIVE_NEW_COMMENT } from '../../actions/trot_actions';

  const initialState = {
    name: "",
    distance: "",
    polyline: "",
    origin: "",
    destination: "",
    bounds: "",
    comments: {},
  };

const routeDetailReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_NEW_ROUTE:
    case RECEIVE_ROUTE:
      return action.route;
    case RECEIVE_NEW_COMMENT:
      const { comment } = action;
      const comments = Object.assign(
        {}, state.comments, { [comment.id]: comment }
      );

      return Object.assign({}, state, { comments: comments });
    default:
      return state;
  }
};

export default routeDetailReducer;
