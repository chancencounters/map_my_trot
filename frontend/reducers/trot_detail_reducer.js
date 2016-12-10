import { RECEIVE_TROT, RECEIVE_NEW_TROT } from '../actions/trot_actions';

  const initialState = {
    id: "",
    routeId: "",
    name: "",
    description: "",
    date: "",
    duration: "",
    route: {
      id: "",
      name: "",
      distance: "",
      origin: "",
      destination: "",
      polyline: "",
      bounds: "",
    }
  };

const trotDetailReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NEW_TROT:
    case RECEIVE_TROT:
      return action.trot;
    default:
      return state;
  }
};

export default trotDetailReducer;
