import * as Util from '../util/comment_api_util';
import { receiveCommentErrors } from './error_actions';

export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENTS";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTSS";
export const CREATE_COMMENT = "CREATE_COMMENTS";

export const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveNewComment = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});


export function fetchComments() {
  return (dispatch) => {
    return Util.fetchComments().then(
      (comments) => dispatch(receiveAllComments(comments)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
  };
}

export function postComment(comment) {
  return (dispatch) => {
    return Util.postComment(comment).then(
      (newComment) => dispatch(receiveNewComment(newComment)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
  };
}
