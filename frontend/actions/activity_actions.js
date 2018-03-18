import * as Util from '../util/activity_api_util';

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";

export const receiveActivities = (activities) => ({
  type: RECEIVE_ACTIVITIES,
  activities
});

export function fetchActivities(limit) {
  return (dispatch) => {
    return Util.fetchActivities(limit).then(
      (activities) => dispatch(receiveActivities(activities))
    );
  };
}
