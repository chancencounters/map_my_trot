export const fetchFriends = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/friends',
  });
};
