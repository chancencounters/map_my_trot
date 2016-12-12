export const asArray = (objects) =>
  Object.keys(objects).map(key => objects[key]);

export const friendRequestsArray = (friendships, currentUser) => {
  const friendRequests = [];
  Object.keys(friendships).map(key => {
    if (friendships[key].status === 'pending'
      && friendships[key].user_id !== currentUser.id) {
      friendRequests.push(friendships[key]);
  }});
  return friendRequests;
};

export const removeFriend = (state, action) => {
  const newFriends = {};
  Object.keys(state).forEach((key) => {
    if (parseInt(key) !== action.friendship.user_id
        && parseInt(key) !== action.friendship.friend_id) {
      Object.assign( newFriends, { [key]: state[key]} );
    }
  });

  return newFriends;
};

export const findFriendshipId = (friendships, friendId, currentUserId) => {
  let friendshipId = 0;
  friendships.forEach((friendship) => {
    if (friendship.user_id === friendId
      && friendship.friend_id === currentUserId) {
      friendshipId = friendship.id;
    } else if (friendship.user_id === currentUserId
      && friendship.friend_id === friendId) {
      friendshipId = friendship.id;
    }
  });

  return friendshipId;
};
