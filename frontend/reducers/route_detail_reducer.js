import { RECEIVE_ROUTE, RECEIVE_NEW_ROUTE } from '../actions/route_actions';

  const initialState = {
    name: "",
    distance: "",
    polyline: "",
    origin: "",
    destination: "",
    bounds: "",
  };

const routeDetailReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_NEW_ROUTE:
    case RECEIVE_ROUTE:
      return action.route;
    default:
      return state;
  }
};

export default routeDetailReducer;
