export const fetchRoutes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/routes',
  });
};

export const postRoute = (route) => {
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
