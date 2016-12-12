export const fetchFriendRequests = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/friend_requests',
  });
};
