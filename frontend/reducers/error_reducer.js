import { CLEAR_ERRORS,
  RECEIVE_SESSION_ERRORS,
  RECEIVE_ROUTE_ERRORS,
  RECEIVE_TROT_ERRORS,
  RECEIVE_FRIEND_ERRORS,
  RECEIVE_FRIENDSHIP_ERRORS
 } from '../actions/error_actions';

const initialState = {
  session: {},
  route: {},
  trot: {},
  friend: {},
  friendship: {},
};

const errorReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return {
        session: action.errors,
        route: {},
        trot: {},
        friend: {},
        friendship: {},
      };
    case RECEIVE_ROUTE_ERRORS:
      return {
        session: {},
        route: action.errors,
        trot: {},
        friend: {},
        friendship: {},
      };
    case RECEIVE_TROT_ERRORS:
      return {
        session: {},
        route: {},
        trot: action.errors,
        friend: {},
        friendship: {},
      };
    case RECEIVE_FRIEND_ERRORS:
    return {
      session: {},
      route: {},
      trot: {},
      friend: action.errors,
      friendship: {},
    };
    case RECEIVE_FRIENDSHIP_ERRORS:
    return {
      session: {},
      route: {},
      trot: {},
      friend: {},
      friendship: action.errors,
    };
    case CLEAR_ERRORS:
      return {
        session: {},
        route: {},
        trot: {},
        friend: {},
        friendship: {},
      };
    default:
      return state;
  }
};

export default errorReducer;
