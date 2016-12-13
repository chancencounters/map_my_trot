import { RECEIVE_TROT,
  RECEIVE_NEW_TROT,
} from '../../actions/trot_actions';
import { RECEIVE_NEW_COMMENT } from '../../actions/trot_actions';

  const initialState = {
    id: "",
    route_id: "",
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

export default trotDetailReducer;
