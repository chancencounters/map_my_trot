export const postComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: '/api/comments',
    data: { comment }
  });
};
