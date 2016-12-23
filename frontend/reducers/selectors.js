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

export const removePotentialFriend = (state, action) => {
  const newPotentialFriend = {};
  Object.keys(state).forEach((key) => {
    if (parseInt(key) !== action.friendship.friend_id) {
      Object.assign(newPotentialFriend, { [key]: state[key]} );
    }
  });

  return newPotentialFriend;
};

export const removeComment = (state, comment) => {
  let newActivityObj = {};
  let newTrotOrRouteObj = {};
  let newCommentsObj = {};
  let activityId

  asArray(state).forEach((activity) => {
    if (activity.activatable_type === "Route") {
      if (Boolean(activity.route.comments)) {
        if (Boolean(activity.route.comments[comment.id])) {
          activityId = activity.id;
          asArray(activity.route.comments).forEach((activityComment) => {
            if (activityComment.id !== comment.id) {
              newCommentsObj = Object.assign(
                newCommentsObj, { [activityComment.id]: activityComment});
                  newTrotOrRouteObj = Object.assign(newTrotOrRouteObj, state[activityId].route, { comments: newCommentsObj });
                    newActivityObj = Object.assign(newActivityObj, state[activityId], { route: newTrotOrRouteObj });
            }
          });
        }
      }
    } else if (activity.activatable_type === "Trot") {
      if (Boolean(activity.trot.comments)) {
        if (Boolean(activity.trot.comments[comment.id])) {
          activityId = activity.id;
          asArray(activity.trot.comments).forEach((activityComment) => {
            if (activityComment.id !== comment.id) {
              newCommentsObj = Object.assign(
                newCommentsObj, { [activityComment.id]: activityComment});
                  newTrotOrRouteObj = Object.assign(newTrotOrRouteObj, state[activityId].trot, { comments: newCommentsObj });
                    newActivityObj = Object.assign(newActivityObj, state[activityId], { trot: newTrotOrRouteObj });
            }
          });
        }
      }
    }
  });

  const newObj = Object.assign({}, state, { [activityId]: newActivityObj} );
  return newObj;
};

export const receiveNewComment = (state, comment) => {
  let newCommentsObj = {};
  let newActivityObj = {};
  let newTrotOrRouteObj = {};
  let newObj = {};
  let activityId;
  asArray(state).forEach((activity) => {
    activityId = activity.id;
    if (Boolean(activity.route)) {
      if (comment.commentable_id === activity.route.id) {
        newCommentsObj = Object.assign({}, activity.route.comments, { [comment.id]: comment });
        newTrotOrRouteObj = Object.assign(newTrotOrRouteObj, activity.route, { comments: newCommentsObj });
        newActivityObj = Object.assign(newActivityObj, activity, { route: newTrotOrRouteObj });
        newObj = Object.assign({}, state, { [activityId]: newActivityObj} );
        debugger
      }
    } else {
      if (comment.commentable_id === activity.trot.id) {
        newCommentsObj = Object.assign({}, activity.trot.comments, { [comment.id]: comment });
        newTrotOrRouteObj = Object.assign(newTrotOrRouteObj, activity.trot, { comments: newCommentsObj });
        newActivityObj = Object.assign(newActivityObj, activity, { trot: newTrotOrRouteObj });
        newObj = Object.assign({}, state, { [activityId]: newActivityObj} );
      }
    }
  });

  return newObj;
};
