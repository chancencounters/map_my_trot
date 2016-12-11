export const fetchFriendships = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/friendship',
  });
};

export const postFriendship = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendship',
    data: { friendship }
  });
};

export const postFriendship = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendship',
    data: { friendship }
  });
};

export const deleteFriendship = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friendship/${id}`,
  });
};
