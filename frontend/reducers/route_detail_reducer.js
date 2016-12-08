import { RECEIVE_NEW_ROUTE } from '../actions/error_actions';

  const initialState = {
    name: "",
    distance: "",
    map_info: "",
  };

const routeDetailReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NEW_ROUTE:
      return action.route;
    default:
      return state;
  }
};
