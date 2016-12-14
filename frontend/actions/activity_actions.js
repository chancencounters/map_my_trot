import * as Util from '../util/activity_api_util';

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";

export const receiveActivities = (activities) => ({
  type: RECEIVE_ACTIVITIES,
  activities
});

export function fetchActivities() {
  return (dispatch) => {
    return Util.fetchActivities().then(
      (activities) => dispatch(receiveActivities(activities))
    );
  };
}
