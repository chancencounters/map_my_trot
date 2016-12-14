import { RECEIVE_ACTIVITIES } from '../../actions/activity_actions';

const ActivitiesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities;
    default:
      return state;
  }
};

export default ActivitiesReducer;
