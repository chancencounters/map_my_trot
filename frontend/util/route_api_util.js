export const createRoute = (route) => {
  return $.ajax({
    method: 'POST',
    url: '/api/routes',
    data: { route }
  });
};

export const deleteRoute = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/route/${id}`,
  });
};
