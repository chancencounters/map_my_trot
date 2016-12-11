import * as Util from '../util/trot_api_util';
import { receiveTrotErrors } from './error_actions';

export const RECEIVE_NEW_TROT = "RECEIVE_NEW_TROT";
export const RECEIVE_TROT = "RECEIVE_TROT";
export const RECEIVE_ALL_TROTS = "RECEIVE_ALL_TROTS";
export const CREATE_TROT = "CREATE_TROT";
export const REMOVE_TROT = "REMOVE_TROT";

export const receiveAllTrots = (trots) => ({
  type: RECEIVE_ALL_TROTS,
  trots
});

export const receiveTrot = (trot) => ({
  type: RECEIVE_TROT,
  trot
});

export const receiveNewTrot = (trot) => ({
  type: RECEIVE_NEW_TROT,
  trot
});

export const createTrot = (trot) => ({
  type: CREATE_TROT,
  trot
});

export const removeTrot = (id) => ({
  type: REMOVE_TROT,
  id
});

export function fetchTrots() {
  return (dispatch) => {
    return Util.fetchTrots().then(
      (trots) => dispatch(receiveAllTrots(trots))
    );
  };
}

export function fetchTrot(id) {
  return (dispatch) => {
    return Util.fetchTrot(id).then(
      (trot) => dispatch(receiveTrot(trot))
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
