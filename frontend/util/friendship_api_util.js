export const postFriendship = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: { friendship }
  });
};

export const deleteFriendship = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${id}`,
  });
};
