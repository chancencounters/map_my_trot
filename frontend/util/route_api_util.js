export const fetchRoutes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/routes',
  });
};

export const fetchRoute = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/routes/${id}`,
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
    url: `/api/routes/${id}`,
  });
};
