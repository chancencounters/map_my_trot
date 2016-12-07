import { CLEAR_ERRORS, RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: [] };
    case RECEIVE_ERRORS:
      return { currentUser: null, errors: action.errors };
    case CLEAR_ERRORS:
      return { currentUser: null, errors: []};
    default:
      return state;
  }
};

export default SessionReducer;
