import * as Util from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export function signup(user) {
  return (dispatch) => {
    return Util.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
  };
}

export function login(user) {
  return (dispatch) => {
    return Util.login(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
  };
}

export function logout() {
  return (dispatch) => {
    return Util.logout().then(
      (currentUser) => dispatch(receiveCurrentUser(null)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    );
  };
}
