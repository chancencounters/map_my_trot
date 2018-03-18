export const fetchPotentialFriends = (search) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
    data: { search }
  });
};

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

export const createFriendship = (friendship) => {
  return $.ajax({
    method: "POST",
    url: "/api/friendships",
    data: { friendship }
  });
};

export const editFriendship = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/friendships/${id}/edit`,
    data: { id }
  });
};

export const deleteFriendship = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${id}`,
  });
};
