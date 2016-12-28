export const postRouteComment = (comment, routeId) => {
    return $.ajax({
      method: "POST",
      url: '/api/comments',
      data: { comment, route_id: routeId }
    });
};

export const postTrotComment = (comment, trotId) => {
    return $.ajax({
      method: "POST",
      url: '/api/comments',
      data: { comment, trot_id: trotId }
    });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`,
    data: { id }
  });
};
