import * as Util from '../util/comment_api_util';
import { receiveCommentErrors } from './error_actions';

export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENTS";

export const receiveNewComment = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export function postRouteComment(comment, routeId) {
  return (dispatch) => {
    return Util.postRouteComment(comment, routeId).then(
      (newComment) => dispatch(receiveNewComment(newComment)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
  };
}

export function postTrotComment(comment, trotId) {
  return (dispatch) => {
    return Util.postTrotComment(comment, trotId).then(
      (newComment) => dispatch(receiveNewComment(newComment)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
  };
}

export function deleteComment(comment) {
  return (dispatch) => {
    return Util.deleteComment(comment).then(
      (newComment) => dispatch(removeComment(newComment)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
  };
}
