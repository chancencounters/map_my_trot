import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
  currentUser: null,
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: [] };
    default:
      return state;
  }
};

export default SessionReducer;
