import { CLEAR_ERRORS,
  RECEIVE_SESSION_ERRORS,
  RECEIVE_ROUTE_ERRORS } from '../actions/error_actions';

const initialState = {
  session: [],
  route: [],
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return {
        session: action.errors,
        route: [],
      };
    case RECEIVE_ROUTE_ERRORS:
      return {
        session: [],
        route: action.errors,
      };
    case CLEAR_ERRORS:
      return {
        session: [],
        route: []
      };
    default:
      return state;
  }
};

export default SessionReducer;
