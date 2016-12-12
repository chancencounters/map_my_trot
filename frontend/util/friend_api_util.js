export const fetchFriends = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/friends',
  });
};

export const fetchFriendRequests = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/friend_requests',
  });
};

export const fetchFriendships = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/friendships',
  });
};

export const postFriendship = (id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: { id }
  });
};

export const deleteFriendship = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${id}`,
  });
};
