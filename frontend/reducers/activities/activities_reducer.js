import { RECEIVE_ACTIVITIES } from '../../actions/activity_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_NEW_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions';
import { removeComment, receiveNewComment } from '../selectors';

const ActivitiesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities;
    case RECEIVE_CURRENT_USER:
      let activities = {};
      Object.keys(state).forEach((key) => {
        let activity = state[key];
        if (activity.user.id === action.currentUser.id) {
          let newActivity = Object.assign({}, activity, { user: action.currentUser });
          activities = Object.assign(activities, { [key]: newActivity} );
        } else {
          activities = Object.assign(activities, { [key]: activity});
        }
      });
      return activities;
    case RECEIVE_NEW_COMMENT:
      return receiveNewComment(state, action.comment);
    case REMOVE_COMMENT:
      return removeComment(state, action.comment);
    default:
      return state;
  }
};

export default ActivitiesReducer;
