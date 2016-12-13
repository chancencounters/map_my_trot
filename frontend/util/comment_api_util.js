export const fetchComments = () => {
  return $.ajax({
    method: "GET",
    url: '/api/comments'
  });
};

export const postComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: '/api/comments',
    data: { comment }
  });
};
