export const fetchTrots = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/trots',
  });
};

export const fetchTrot = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/trots/${id}`,
  });
};

export const postTrot = (trot) => {
  return $.ajax({
    method: 'POST',
    url: '/api/trots',
    data: { trot }
  });
};

export const deleteTrot = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/trots/${id}`,
  });
};
