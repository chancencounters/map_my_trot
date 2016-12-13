export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";
export const RECEIVE_TROT_ERRORS = "RECEIVE_TROT_ERRORS";
export const RECEIVE_FRIEND_ERRORS = "RECEIVE_FRIEND_ERRORS";
export const RECEIVE_FRIENDSHIP_ERRORS = "RECEIVE_FRIENDSHIP_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const receiveRouteErrors = (errors) => {
  return {
    type: RECEIVE_ROUTE_ERRORS,
    errors
  };
};

export const receiveTrotErrors = (errors) => {
  return {
    type: RECEIVE_TROT_ERRORS,
    errors
  };
};

export const receiveFriendErrors = (errors) => {
  return {
    type: RECEIVE_FRIEND_ERRORS,
    errors
  };
};

export const receiveFriendshipErrors = (errors) => {
  return {
    type: RECEIVE_FRIENDSHIP_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
