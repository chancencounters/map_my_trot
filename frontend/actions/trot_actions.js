import * as Util from '../util/trot_api_util';
import { receiveTrotErrors } from './error_actions';

export const RECEIVE_NEW_TROT = "RECEIVE_NEW_TROT";
export const RECEIVE_TROT = "RECEIVE_TROT";
export const RECEIVE_ALL_TROTS = "RECEIVE_ALL_TROTS";
export const CREATE_TROT = "CREATE_TROT";
export const REMOVE_TROT = "REMOVE_TROT";

export const receiveAllTrots = (routes) => ({
  type: RECEIVE_ALL_TROTS,
  routes
});

export const receiveTrot = (route) => ({
  type: RECEIVE_TROT,
  route
});

export const receiveNewTrot = (route) => ({
  type: RECEIVE_NEW_TROT,
  route
});

export const createTrot = (route) => ({
  type: CREATE_TROT,
  route
});

export const removeTrot = (id) => ({
  type: REMOVE_TROT,
  id
});

export function fetchTrots() {
  return (dispatch) => {
    return Util.fetchTrots().then(
      (routes) => dispatch(receiveAllTrots(routes))
    );
  };
}

export function fetchTrot(id) {
  return (dispatch) => {
    return Util.fetchTrot(id).then(
      (route) => dispatch(receiveTrot(route))
    );
  };
}

export function postTrot(trot) {
  return (dispatch) => {
    return Util.postTrot(trot).then(
      (currentTrot) => dispatch(receiveNewTrot(currentTrot)),
      (errors) => dispatch(receiveTrotErrors(errors.responseJSON))
    );
  };
}

export function deleteTrot(id) {
  return (dispatch) => {
    return Util.deleteTrot(id).then(
      (trotId) => dispatch(removeTrot(trotId)),
      (errors) => dispatch(receiveTrotErrors(errors.responseJSON))
    );
  };
}
