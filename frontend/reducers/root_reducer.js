import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import routesReducer from './routes/routes_reducer';
import routeDetailReducer from './routes/route_detail_reducer';
import trotsReducer from './trots/trots_reducer';
import trotDetailReducer from './trots/trot_detail_reducer';
import friendsReducer from './friends/friends_reducer';
import friendshipsReducer from './friends/friendships_reducer';
import potentialFriendsReducer from './friends/potential_friends_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  routes: routesReducer,
  routeDetail: routeDetailReducer,
  trotDetail: trotDetailReducer,
  trots: trotsReducer,
  friends: friendsReducer,
  friendships: friendshipsReducer,
  potentialFriends: potentialFriendsReducer,
});

export default rootReducer;
