export const postComment = (comment, route_id) => {
  return $.ajax({
    method: "POST",
    url: '/api/comments',
    data: { comment, route_id: route_id }
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`,
    data: { id }
  });
};
