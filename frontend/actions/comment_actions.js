import * as Util from '../util/comment_api_util';
import { receiveCommentErrors } from './error_actions';

export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENTS";

export const receiveNewComment = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export function postComment(comment) {
  return (dispatch) => {
    return Util.postComment(comment).then(
      (newComment) => dispatch(receiveNewComment(newComment)),
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
    );
  };
}
