import * as Util from '../util/session_api_util';
import { receiveSessionErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveUpdatedUser = (currentUser) => {
  return {
    type: RECEIVE_UPDATED_USER,
    currentUser
  };
};

export function signup(user) {
  return (dispatch) => {
    return Util.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
}

export function updateUser(formData, id) {
  return (dispatch) => {
    return Util.patchUser(formData, id).then(
      (currentUser) => dispatch(receiveUpdatedUser(currentUser)),
      (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
    )
  }
}

export function login(user) {
  return (dispatch) => {
    return Util.login(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
}

export function logout() {
  return (dispatch) => {
    window.currentUser = null;
    return Util.logout().then(
      (currentUser) => dispatch(receiveCurrentUser(null)),
      (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
    );
  };
}
