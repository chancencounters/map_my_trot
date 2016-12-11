import { CLEAR_ERRORS,
  RECEIVE_SESSION_ERRORS,
  RECEIVE_ROUTE_ERRORS,
  RECEIVE_TROT_ERRORS,
 } from '../actions/error_actions';

const initialState = {
  session: [],
  route: [],
  trot: [],
};

const errorReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return {
        session: action.errors,
        route: [],
        trot: [],
      };
    case RECEIVE_ROUTE_ERRORS:
      return {
        session: [],
        route: action.errors,
        trot: [],
      };
    case RECEIVE_TROT_ERRORS:
      return {
        session: [],
        route: [],
        trot: action.errors,
      };
    case CLEAR_ERRORS:
      return {
        session: [],
        route: [],
        trot: [],
      };
    default:
      return state;
  }
};

export default errorReducer;
